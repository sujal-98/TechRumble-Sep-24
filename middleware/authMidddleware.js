const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Middleware to protect routes
// - This middleware checks if a valid JWT token is provided in the Authorization header.
// - If the token is valid, it decodes the token to retrieve the user ID, then fetches the user from the database (excluding the password).
// - If no token is found or if the token is invalid, it responds with a 401 status code indicating unauthorized access.
protect = async (req, res, next) => {
  // Initialize token variable

  // Check if the authorization header exists and starts with "Bearer"

    // Extract token from the header

    // Verify the token using JWT and the secret key

    // Find the user by decoded ID and exclude the password field

    // Call the next middleware

    // Catch any errors and respond with a 401 status if the token verification fails

  // If no token is provided, respond with a 401 status
};

// Middleware to check admin privileges
// - This middleware checks if the authenticated user has admin privileges.
// - If the user is an admin, it allows the request to proceed to the next middleware or route handler.
// - If the user is not an admin, it responds with a 401 status code indicating that admin privileges are required.
admin = (req, res, next) => {
  // Check if the user is authenticated and has admin privileges

    // If the user is an admin, call the next middleware

    // If the user is not an admin, respond with a 401 status
};



// Export these functions
