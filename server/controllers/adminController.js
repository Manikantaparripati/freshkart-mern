const asyncHandler = require('express-async-handler');
const Order = require('../models/Order');
const User = require('../models/User');
const Product = require('../models/Product');

exports.getDashboardStats = asyncHandler(async (req, res) => {
  const totalOrders = await Order.countDocuments();
  const totalUsers = await User.countDocuments();
  const totalProducts = await Product.countDocuments();
  
  const revenueResult = await Order.aggregate([
    { $match: { paymentStatus: 'Completed' } },
    { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } }
  ]);
  const totalRevenue = revenueResult.length > 0 ? revenueResult[0].totalRevenue : 0;
  
  const recentOrders = await Order.find({}).populate('user', 'name email').sort({ createdAt: -1 }).limit(5);
  
  const salesByCategory = await Order.aggregate([
    { $unwind: '$items' },
    { $lookup: { from: 'products', localField: 'items.product', foreignField: '_id', as: 'productDetails' } },
    { $unwind: '$productDetails' },
    { $lookup: { from: 'categories', localField: 'productDetails.category', foreignField: '_id', as: 'categoryDetails' } },
    { $unwind: '$categoryDetails' },
    { $group: { _id: '$categoryDetails.name', totalSales: { $sum: { $multiply: ['$items.price', '$items.quantity'] } } } }
  ]);

  res.json({
    totalOrders,
    totalUsers,
    totalProducts,
    totalRevenue,
    recentOrders,
    salesByCategory
  });
});

exports.getUsersList = asyncHandler(async (req, res) => {
  const users = await User.find({}).select('-password').sort({ createdAt: -1 });
  res.json(users);
});

exports.updateUserRole = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.role = req.body.role || user.role;
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
