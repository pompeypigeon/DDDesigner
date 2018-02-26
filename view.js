'use strict'

var express = require('express'),
    mysql = require('mysql'),
    router = express.Router(),
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

router.get('/', function(req,res){
  res.sendFile(__dirname + '/static/view.html');
})

router.get('/dictionary/:id', getDictionary);

function getDictionary(req,res){
	var query = "Select * from Dictionary where dictID = " +
	req.params.id + ";"
	conn.query(query, function(err, result, fields){
		if (err) throw err;
		res.send(JSON.stringify(result));
	});
}

module.exports = router;
