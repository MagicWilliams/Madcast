var express = require('express')
var app = express();
var router = express.Router();
var path = require('path');
var mongodb = require('mongodb');
var assert = require('assert');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('get-methodoverride');
var engines = require('consolidate');



app.use(express.static('public'));

var routes = require(path.join(__dirname + '/routes/index.js'));


app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');


app.use('/', routes);

// viewed at http://localhost:8080
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log('Madcast listening on port 3000!')
})

module.exports = app;

//Mongo stuff

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

// grab the user model
var Madlib = require('./models/madlib');

// create a new user
var newMadlib = Madlib({
  podcast: 'Bodega Boys',
  activity: 'smoking',
  feeling: 'lit'
});

// save the user
newMadlib.save(function(err) {
  if (err) throw err;

  console.log('Madlib saved!');
});
