var express = require('express');
var app = express();
var yelp = require("yelp").createClient({
consumer_key: "9fBW_EllRFhhLq1y2EvTxA", 
consumer_secret: "zeGo8LhBUgnBodAaBL_I5mPjwjk",
token: "YvNNWd4uoEb20K__bk1RjpPPKGbrPz26",
token_secret: "nn-fAytOzS8Fn3tQkxx1aUGEBJg"
});
var methodOverride = require('method-override');
var bodyParser = require('body-parser');


app.set('port', 3000);
app.use(express.static(__dirname + '/public'));
app.use(methodOverride());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/search', function(req,res){

var term = req.query.term;
var location = req.query.location;

	yelp.search({term: term, location: location}, function(error, data) {
	  console.log(error);
	  console.log(data);
	  res.send(data);
	});


});

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port %d', server.address().port);
});