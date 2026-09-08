const asyncHandler = require('express-async-handler');
const Order = require('../models/Order');
const Product = require('../models/Product');
const Cart = require('../models/Cart');

exports.createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    coupon
  } = req.body;

  const itemsList = req.body.items || req.body.orderItems || [];

  if (itemsList.length === 0) {
    res.status(400);
    throw new Error('No order items');
  }

  // Check and deduct stock
  for (let i = 0; i < itemsList.length; i++) {
    const item = itemsList[i];
    if (item.product) {
      const product = await Product.findById(item.product);
      if (product) {
        if (product.stock < item.quantity) {
          res.status(400);
          throw new Error(`Not enough stock for ${product.name}`);
        }
        product.stock -= item.quantity;
        await product.save();
      }
    }
  }

  const order = new Order({
    user: req.user._id,
    items: itemsList,
    shippingAddress,
    paymentMethod: paymentMethod || 'COD',
    paymentStatus: paymentMethod === 'COD' ? 'Pending' : 'Completed',
    orderStatus: 'Order Placed',
    taxPrice: taxPrice || 0,
    shippingPrice: shippingPrice || 0,
    totalPrice: totalPrice || 0,
    coupon: coupon || null,
    trackingHistory: [
      { status: 'Order Placed', comment: 'Order placed successfully' }
    ]
  });

  const createdOrder = await order.save();
  
  // Clear cart if any
  await Cart.findOneAndUpdate({ user: req.user._id }, { items: [] });
  
  res.status(201).json(createdOrder);
});

exports.getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(orders);
});

exports.getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');
  if (order) {
    if (order.user._id.toString() === req.user._id.toString() || req.user.role === 'admin') {
      res.json(order);
    } else {
      res.status(401);
      throw new Error('Not authorized to view this order');
    }
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

exports.cancelOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    if (order.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('Not authorized');
    }
    if (order.orderStatus === 'Shipped' || order.orderStatus === 'Delivered') {
      res.status(400);
      throw new Error('Cannot cancel shipped or delivered order');
    }
    order.orderStatus = 'Cancelled';
    order.trackingHistory.push({ status: 'Cancelled', comment: 'Order cancelled by user' });
    
    // Restore stock
    for (let i = 0; i < order.items.length; i++) {
      const item = order.items[i];
      const product = await Product.findById(item.product);
      if (product) {
        product.stock += item.quantity;
        await product.save();
      }
    }
    
    await order.save();
    res.json({ message: 'Order cancelled successfully', order });
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

exports.getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name').sort({ createdAt: -1 });
  res.json(orders);
});

exports.updateOrderStatus = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  const { status, comment } = req.body;
  if (order) {
    order.orderStatus = status;
    order.trackingHistory.push({ status, comment: comment || `Status updated to ${status}` });
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});
