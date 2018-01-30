'use strict'
var app = require('./app'),
    db = require('./db'),
    port = process.env.PORT || 8000,
    server = app.listen(port, function(){
      console.log("server started on " + port)
});
