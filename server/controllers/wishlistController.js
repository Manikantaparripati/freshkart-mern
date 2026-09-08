const asyncHandler = require('express-async-handler');
const Wishlist = require('../models/Wishlist');

exports.getWishlist = asyncHandler(async (req, res) => {
  let wishlist = await Wishlist.findOne({ user: req.user._id }).populate('products', 'name price images slug');
  if (!wishlist) {
    wishlist = await Wishlist.create({ user: req.user._id, products: [] });
  }
  res.json(wishlist);
});

exports.addToWishlist = asyncHandler(async (req, res) => {
  const { productId } = req.body;
  let wishlist = await Wishlist.findOne({ user: req.user._id });
  if (!wishlist) {
    wishlist = await Wishlist.create({ user: req.user._id, products: [] });
  }
  if (!wishlist.products.includes(productId)) {
    wishlist.products.push(productId);
    await wishlist.save();
  }
  const updatedWishlist = await Wishlist.findById(wishlist._id).populate('products', 'name price images slug');
  res.json(updatedWishlist);
});

exports.removeFromWishlist = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const wishlist = await Wishlist.findOne({ user: req.user._id });
  if (!wishlist) {
    res.status(404);
    throw new Error('Wishlist not found');
  }
  wishlist.products = wishlist.products.filter(p => p.toString() !== productId);
  await wishlist.save();
  const updatedWishlist = await Wishlist.findById(wishlist._id).populate('products', 'name price images slug');
  res.json(updatedWishlist);
});

exports.clearWishlist = asyncHandler(async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user._id });
  if (wishlist) {
    wishlist.products = [];
    await wishlist.save();
  }
  res.json({ message: 'Wishlist cleared' });
});
