const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Register a new user
// POST /api/auth/register

registerUser = async (req, res, next) => {

  // Check if user already exists
 

  // Create new user
 

  // Generate JWT
 
};

// Authenticate user and get token
// POST /api/auth/login
loginUser = async (req, res, next) => {

// Check for user email

// Generate JWT
   
};

// Get user profile
// GET /api/auth/profile
getUserProfile = async (req, res, next) => {
  
};


//export these functions