const asyncHandler = require('express-async-handler');
const Review = require('../models/Review');
const Product = require('../models/Product');
const Order = require('../models/Order');

exports.getProductReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ product: req.params.productId }).populate('user', 'name avatar');
  res.json(reviews);
});

exports.createReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const productId = req.params.productId;

  const product = await Product.findById(productId);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  const alreadyReviewed = await Review.findOne({ product: productId, user: req.user._id });
  if (alreadyReviewed) {
    res.status(400);
    throw new Error('Product already reviewed');
  }

  // Check if user actually purchased it
  const orders = await Order.find({ user: req.user._id, 'items.product': productId, orderStatus: 'Delivered' });
  const isVerifiedPurchase = orders.length > 0;

  if (!isVerifiedPurchase) {
    res.status(400);
    throw new Error('You must purchase and receive this product before reviewing it');
  }

  const review = await Review.create({
    product: productId,
    user: req.user._id,
    rating: Number(rating),
    comment,
    isVerifiedPurchase
  });

  const reviews = await Review.find({ product: productId });
  product.numReviews = reviews.length;
  product.rating = reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;
  await product.save();

  res.status(201).json(review);
});

exports.updateReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review) {
    if (review.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('Not authorized to update this review');
    }
    review.rating = req.body.rating || review.rating;
    review.comment = req.body.comment || review.comment;
    const updatedReview = await review.save();

    const reviews = await Review.find({ product: review.product });
    const product = await Product.findById(review.product);
    product.rating = reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;
    await product.save();

    res.json(updatedReview);
  } else {
    res.status(404);
    throw new Error('Review not found');
  }
});

exports.deleteReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review) {
    if (review.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      res.status(401);
      throw new Error('Not authorized');
    }
    await Review.findByIdAndDelete(req.params.id);
    
    const reviews = await Review.find({ product: review.product });
    const product = await Product.findById(review.product);
    product.numReviews = reviews.length;
    product.rating = reviews.length > 0 ? reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length : 0;
    await product.save();
    
    res.json({ message: 'Review removed' });
  } else {
    res.status(404);
    throw new Error('Review not found');
  }
});
