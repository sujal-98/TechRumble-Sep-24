const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

//Schema Should Contain

// The name of the user (string)
// Name is required
  
// The email of the user (string)
// Email is required
// Email must be unique
// Optional: Email validation using regex

// The password of the user (string)
// Password is required

// Boolean flag to identify if user is an admin
// Defaults to 'false'

// Automatically adds 'createdAt' and 'updatedAt' timestamps





// Define the schema for the User model
const userSchema = new mongoose.Schema({

//write schema here

  });

// Pre-save middleware to hash the password before saving
userSchema.pre('save', async function(next) {
 
});

// Method to match entered password with the hashed password
userSchema.methods.matchPassword = async function(enteredPassword) {
  
};

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;  // Export the User model for use in controllers
