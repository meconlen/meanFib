# Introduction 

This is a Fibonacci numbers app implemented in a MEAN stack. 
The purpose of the app is to take a number n and compute the n'th Fibonacci number. 

# Install
Run 

	$ npm install

to install the libraries (express) and run 

	$ node server.js

to run the server! 

You may wish to edit the port and host options in server.js

# Server

The server has two (useful) routes. 
	/ leads to index.html that contains the front end
	/fib/:n leads to the server side that computes the result

# Client	
	index.html contains a Div with a controller defined in fib.js 
	fib.js registers the controller for the div and defines updateFib()