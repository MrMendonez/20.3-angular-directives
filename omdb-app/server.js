// Work in pairs
// Create an AngularJS app that searches the OMDB for a movie, given a title
// http://www.omdbapi.com/?s=matrix&y=&plot=short&r=json
// Display each result as a directive with the movie image and title
// Clicking on the title shows a list of actors in that movie

var express = require('express');
var logger = require('morgan');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/public/views/index.html');
});

app.listen(PORT, function() {
  console.log("Listening on PORT ", PORT)
})