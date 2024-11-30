const Review = require('../models/Review');


const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reviews' });
  }
};

const addReview = async (req, res) => {
  const { title, author, rating, review } = req.body;
  const newReview = new Review({
    title,
    author,
    rating,
    review
  });

  try {
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(500).json({ message: 'Error saving review' });
  }
};


const updateReview = async (req, res) => {
  const { id } = req.params;
  const { title, author, rating, review } = req.body;

  try {
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { title, author, rating, review },
      { new: true }
    );
    res.json(updatedReview);
  } catch (err) {
    res.status(500).json({ message: 'Error updating review' });
  }
};


const deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    await Review.findByIdAndDelete(id);
    res.json({ message: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting review' });
  }
};

module.exports = { getAllReviews, addReview, updateReview, deleteReview };
