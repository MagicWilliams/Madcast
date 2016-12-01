// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var madlibSchema = new Schema({
  podcast: String,
  activity: String,
  feeling: String
});

// the schema is useless so far
// we need to create a model using it
var Madlib = mongoose.model('Madlib', madlibSchema);

// make this available to our users in our Node applications
module.exports = Madlib;
