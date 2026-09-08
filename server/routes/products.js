const express = require('express');
const router = express.Router();
const { 
  getProducts, 
  getProductBySlug, 
  getFeaturedProducts, 
  getBestSellers, 
  getNewArrivals, 
  getRecommendedProducts, 
  searchProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/auth');

router.get('/featured', getFeaturedProducts);
router.get('/bestsellers', getBestSellers);
router.get('/newarrivals', getNewArrivals);
router.get('/recommended', getRecommendedProducts);
router.get('/search', searchProducts);

router.route('/')
  .get(getProducts)
  .post(protect, admin, createProduct);

router.route('/:id')
  .get(getProductBySlug)  // handles both slug and id lookups
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

module.exports = router;
