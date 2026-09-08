const asyncHandler = require('express-async-handler');
const Cart = require('../models/Cart');

exports.getCart = asyncHandler(async (req, res) => {
  let cart = await Cart.findOne({ user: req.user._id }).populate('items.product', 'name price images slug stock');
  if (!cart) {
    cart = await Cart.create({ user: req.user._id, items: [] });
  }
  res.json(cart);
});

exports.addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity, price } = req.body;
  let cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    cart = await Cart.create({ user: req.user._id, items: [] });
  }
  const existingItemIndex = cart.items.findIndex(item => item.product.toString() === productId);
  if (existingItemIndex >= 0) {
    cart.items[existingItemIndex].quantity += Number(quantity);
  } else {
    cart.items.push({ product: productId, quantity: Number(quantity), price });
  }
  await cart.save();
  const updatedCart = await Cart.findById(cart._id).populate('items.product', 'name price images slug stock');
  res.json(updatedCart);
});

exports.updateCartItem = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }
  const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
  if (itemIndex >= 0) {
    if (quantity > 0) {
      cart.items[itemIndex].quantity = quantity;
    } else {
      cart.items.splice(itemIndex, 1);
    }
    await cart.save();
    const updatedCart = await Cart.findById(cart._id).populate('items.product', 'name price images slug stock');
    res.json(updatedCart);
  } else {
    res.status(404);
    throw new Error('Item not in cart');
  }
});

exports.removeFromCart = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }
  cart.items = cart.items.filter(item => item.product.toString() !== productId);
  await cart.save();
  const updatedCart = await Cart.findById(cart._id).populate('items.product', 'name price images slug stock');
  res.json(updatedCart);
});

exports.clearCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });
  if (cart) {
    cart.items = [];
    await cart.save();
  }
  res.json({ message: 'Cart cleared' });
});
