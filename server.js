'use strict'


//server
const	birds = require('./routes/dictionary.js/'),
			bodyparser = require('body-parser'),
			url = require('url'),
			express = require('express'),
			app = express(),
			server = require('http').Server(app),
			io = require('socket.io').listen(server),
			port = 8080;

//database
const mysql = require('mysql'),
			conn = mysql.createConnection({
				host: 'localhost',
				user: 'root',
				password: 'root',
				database: 'dataDictionary'
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

app.use('/dictionary', dictionary);

//dictionary


//users
app.get('/user/:id', getUser);
app.post('/user/:id', addNewUser);
app.delete('/user/:id', removeUser);

//collaboration
app.get('dictionary/:dictID/collab', getAllCollabs);
app.post('dictionary/:dictID/collab/user/:userID', addToCollab);
app.delete('dictionary/:dictID/collab/user/:userID', removeFromCollab)



function getUser(req,res){
	res.send("Get user" + req.params.id)
}

function addNewUser(req,res){
	res.send("Add user" + req.params.id)
}

function removeUser(req,res){
	res.send("Remove user" + req.params.id)
}

function getAllCollabs(req,res){
	res.send("All collabs for " + req.params.dictID + " will be listed")
}

function addToCollab(req,res){
	res.send("User " + req.params.userID + " will be added to dictionary with ID " + req.params.dictID)
}

function removeFromCollab(req,res){
	res.send("User " + req.params.userID + " will be removed from dictionary with ID " + req.params.dictID)
}

//socket functions
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
