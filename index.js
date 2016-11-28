var express = require('express')
var app = express()
var path = require('path');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('get-methodoverride');

app.use(express.static('public'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

mongoose.connect('mongodb://localhost/lol');
fa


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

var Schema = new mongoose.Schema({
	podcastName : String,
	activity : String,
	mood : String
});

var user = mongoose.model('user', Schema);

app.post('/new', function(req, res){
	new user({
		podcastName : req.body.poddy,
		activity    : req.body.activity,
		mood        : req.body.adjective,

	}).save(function(err, doc){
		if(err) res.json(err);
		else 	res.send("Success!")
	});
});