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

app.get('/', function(req,res){
	res.sendFile(__dirname, '/pages/index.html');
})