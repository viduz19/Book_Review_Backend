const express = require('express');
const router = express.Router();
const {
  getAllReviews,
  addReview,
  updateReview,
  deleteReview
} = require('../controllers/reviewController');


router.get('/', getAllReviews);


router.post('/', addReview);


router.put('/:id', updateReview);


router.delete('/:id', deleteReview);

module.exports = router;
