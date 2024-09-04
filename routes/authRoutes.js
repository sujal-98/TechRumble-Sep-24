const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Routes for user registration and login
router.post('/register', registerUser);
router.post('/login', loginUser);

// Route for getting user profile (protected)
router.get('/profile', protect, getUserProfile);

module.exports = router;
