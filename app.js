'use strict'
var express = require('express'),
    app = express(),
    db = require('./db');

app.use(express.static(__dirname + '/static'))

app.get('/dictionary', function(req,res){
    	var something = "HVYB(S*b89";
    	return something;
    })

app.get('/', function(req,res){
    	res.sendFile(__dirname, '/static/index.html');
})

module.exports = app;
