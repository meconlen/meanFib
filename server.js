var express = require('express');
var https = require('https');
var http = require('http');

var app = express();

var port = process.env.PORT || 8080;

var options = {
	host: '127.0.0.1',
};

app.listen(port);
console.log('Magic happens on port ' + port);

function Fib(n) {
	var value, previousValue, swap;

	if(n<3) return 1;
	value = 1;  previousValue = 1;
	for(index = 2; index < n; index++) {
		swap = value;
		value = value + previousValue;
		previousValue = swap;
	}
	return value;
}

app.use('/', express.static('./public/static'));

app.get('/fib/:l', function(req, res) {
	var j;
	var l = req.param("l");

	if(l > 1500) {
		res.status(403);
		res.send("");
	} else {
		j = Fib(l);
		console.log("The " + l + " fibonacci number is " +j );
		res.send(JSON.stringify(j) );
	}
});

app.all('*', function(req, res) {
	console.log('You asked for ' + req + ' with ' + res);
})