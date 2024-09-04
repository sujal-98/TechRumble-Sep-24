const Movie = require('../models/movieModel');

// Get all movies
// GET /api/movies
const getMovies = async (req, res, next) => {
  try {
    // Retrieve all movie documents from the database
    
    // Respond with the list of movies
   
  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
};

// Get a movie by ID
// GET /api/movies/:id
// Public
const getMovieById = async (req, res, next) => {
  try {
    // Extract movie ID from the request parameters
    
    // Find a movie document by its ID
    
    // If movie is not found, respond with a 404 status and appropriate message
   
    
    // Respond with the movie details
    
  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
};

// Create a new movie
// POST /api/movies
const createMovie = async (req, res, next) => {
  try {
    // Extract movie data from the request body
    
    // Create a new movie document with the provided data
  
    
    // Respond with the created movie details
   
  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
};

// Update an existing movie
// PUT /api/movies/:id
const updateMovie = async (req, res, next) => {
  try {
    // Extract movie ID from the request parameters
    
    // Extract updated movie data from the request body
    
    // Find and update the movie document by its ID
 
    
    // If movie is not found, respond with a 404 status and appropriate message
   
    // Respond with the updated movie details
   
  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
};

// Delete a movie
// DELETE /api/movies/:id
const deleteMovie = async (req, res, next) => {
  try {
    // Extract movie ID from the request parameters
    
    // Find and delete the movie document by its ID
    
    // If movie is not found, respond with a 404 status and appropriate message

    // Respond with a success message
   
  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
};

// Export the functions
module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
};
