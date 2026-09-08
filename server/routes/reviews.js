const express = require('express');
const router = express.Router();
const { getProductReviews, createReview, updateReview, deleteReview } = require('../controllers/reviewController');
const { protect, admin } = require('../middleware/auth');

router.route('/:productId')
  .get(getProductReviews)
  .post(protect, createReview);

router.route('/:id')
  .put(protect, updateReview)
  .delete(protect, deleteReview);

module.exports = router;
