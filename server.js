'use strict'
//server
const	express = require('express'),
			app = express(),
			server = require('http').Server(app),
			io = require('socket.io').listen(server),
			port = 8000;

//database
const mysql = require('mysql'),
			conn = mysql.createConnection({
				host: 'localhost',
				user: 'root',
				password: 'root',
				database: 'datadictionary'
			});



conn.connect(function(err){
	if(err){
		console.log('No connecttion', err.errorno, err.fatal);
		return;
	}
	console.log('Connection to database established');
})

app.get('/', function(req,res){
	res.sendFile(__dirname + '/static/index.html');
});

io.on('connection', function(socket){
	console.log("New user: " + socket);

	socket.on('disconnect', function(){
		console.log("User disconnected");
	})

	socket.on('create', function(room){
		socket.join(room);
		console.log(room);
	})
})

app.use(express.static(__dirname + '/static'));

server.listen(port, function(){
	console.log('Running on '+ port);
});
