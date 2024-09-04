const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Required for hashing passwords

// Register a new user
// POST /api/auth/register
const registerUser = async (req, res, next) => {
  try {
    // Extract email and password from the request body
    const { email, password } = req.body;

    // Check if the user already exists in the database
    // If user exists, respond with a 400 status and appropriate message

    // Hash the user's password
    // Use bcrypt to hash the password before saving it to the database

    // Create a new user instance with the hashed password
    // Save the new user to the database

    // Generate a JWT token
    // Sign the token with a secret key and set an expiration time

    // Respond with the generated JWT token
    // Set the response status to 201 (Created) and include the token in the response

  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
};

// Authenticate user and get token
// POST /api/auth/login
const loginUser = async (req, res, next) => {
  try {
    // Extract email and password from the request body
    const { email, password } = req.body;

    // Check if the user exists in the database by email
    // If user does not exist, respond with a 401 status and appropriate message

    // Compare the provided password with the hashed password stored in the database
    // Use bcrypt to compare the passwords

    // Generate a JWT token
    // Sign the token with a secret key and set an expiration time

    // Respond with the generated JWT token
    // Set the response status to 200 (OK) and include the token in the response

  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
};

// Get user profile
// GET /api/auth/profile
const getUserProfile = async (req, res, next) => {
  try {
    // Extract the user ID from the request (usually from JWT payload)
    const userId = req.userId; // Assuming middleware sets req.userId from JWT

    // Retrieve the user from the database by ID
    // If user does not exist, respond with a 404 status and appropriate message

    // Respond with the user's profile information
    // Set the response status to 200 (OK) and include the user profile in the response

  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
};

// Export the functions
module.exports = {
  registerUser,
  loginUser,
  getUserProfile
};
