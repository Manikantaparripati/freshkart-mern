const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');
const Review = require('../models/Review');

exports.getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: 'i' } }
    : {};
  const categoryFilter = req.query.category ? { category: req.query.category } : {};
  const minPrice = req.query.minPrice ? { price: { $gte: Number(req.query.minPrice) } } : {};
  const maxPrice = req.query.maxPrice ? { price: { $lte: Number(req.query.maxPrice) } } : {};

  const query = { ...keyword, ...categoryFilter, ...minPrice, ...maxPrice, isActive: true };

  const sortOption = req.query.sort ? { [req.query.sort]: -1 } : { createdAt: -1 };

  const count = await Product.countDocuments(query);
  const products = await Product.find(query)
    .populate('category', 'name slug')
    .sort(sortOption)
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize), total: count });
});

exports.getProductBySlug = asyncHandler(async (req, res) => {
  // Try slug first, then _id
  let product = await Product.findOne({ slug: req.params.id, isActive: true }).populate('category', 'name slug');
  if (!product && req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    product = await Product.findById(req.params.id).populate('category', 'name slug');
  }
  if (product) {
    const reviews = await Review.find({ product: product._id }).populate('user', 'name avatar');
    res.json({ ...product.toObject(), reviews });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

exports.getFeaturedProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ isFeatured: true, isActive: true }).limit(8);
  res.json(products);
});

exports.getBestSellers = asyncHandler(async (req, res) => {
  const products = await Product.find({ isBestSeller: true, isActive: true }).limit(8);
  res.json(products);
});

exports.getNewArrivals = asyncHandler(async (req, res) => {
  const products = await Product.find({ isNewArrival: true, isActive: true }).sort({ createdAt: -1 }).limit(8);
  res.json(products);
});

exports.getRecommendedProducts = asyncHandler(async (req, res) => {
  const { categoryId, productId } = req.query;
  const products = await Product.find({
    category: categoryId,
    _id: { $ne: productId },
    isActive: true
  }).limit(4);
  res.json(products);
});

exports.searchProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.q;
  if (!keyword) {
    return res.json([]);
  }
  const products = await Product.find({
    name: { $regex: keyword, $options: 'i' },
    isActive: true
  }).select('name slug images price').limit(5);
  res.json(products);
});

exports.createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

exports.updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

exports.deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (product) {
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});
