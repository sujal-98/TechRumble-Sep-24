const mongoose = require('mongoose');


//The schema should include this

// The title of the movie (string)
// Title is required

// The director of the movie (string)
// Required or optional depending on your use case

// The release year of the movie (number)
// Add validation for year if needed

// The genre of the movie (string)
// Consider adding enum for fixed genre values


// The rating of the movie (number)
// Optional: Add range validation (e.g., 1-10)

// You can add more fields here as required
// Examples: duration, actors, synopsis, etc.



// Define the schema for the Movie model
const movieSchema = new mongoose.Schema({
 
  //write the schema here

});

// Create the Movie model from the schema
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;  // Export the Movie model for use in controllers
