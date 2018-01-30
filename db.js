var mysql = require('mysql'),
    con = mysql.createConnection({
      host: "localhost",
      user: "pompeypigeon",
      password: "fred1997",
      database: "dataDictionary"
    });

con.connect(function(err){
  if (err) throw err;
  console.log("connected to db");
})
