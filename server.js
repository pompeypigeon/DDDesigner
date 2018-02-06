<<<<<<< HEAD
const 	url = require('url')
		express = require('express'),
		app = express(),
		server = require('http').Server(app),
		io = require('socket.io').listen(server),
		port = process.env.PORT || 8080;

server.listen(port, function(){
	console.log("on port "+ port);
})
console.log("Server running!");

app.use(express.static(__dirname + '/pages'))

app.get('/dictionary', function(req,res){
	var something = "HVYB(S*b89";
	res.send(something);
})


app.get('/', function(req,res){
	res.sendFile(__dirname, '/pages/index.html');
})
=======
'use strict'
var app = require('./app'),
    db = require('./db'),
    port = process.env.PORT || 8000,
    server = app.listen(port, function(){
      console.log("server started on " + port)
});
>>>>>>> 518765cacec8c54932ab46488ea751596c9a0152
