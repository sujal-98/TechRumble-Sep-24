const express = require('express');
const {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/movieController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

// Route to get all movies and create a new movie
// - GET /api/movies: Public route to fetch all movies
// - POST /api/movies: Protected route (admin only) to create a new movie
router.route('/')
  .get(getMovies)           // Public route to get all movies
  .post(protect, admin, createMovie); // Protected route (admin only) to create a new movie

// Route to get a movie by ID, update a movie, and delete a movie
// - GET /api/movies/:id: Public route to fetch a movie by its ID
// - PUT /api/movies/:id: Protected route (admin only) to update a movie by its ID
// - DELETE /api/movies/:id: Protected route (admin only) to delete a movie by its ID
router.route('/:id')
  .get(getMovieById)        // Public route to get a movie by ID
  .put(protect, admin, updateMovie)   // Protected route (admin only) to update a movie by ID
  .delete(protect, admin, deleteMovie); // Protected route (admin only) to delete a movie by ID

module.exports = router;
