const express = require('express'),
      router = express.Router();

router.get('/:id', getDictionary);
router.get('/:id/tables', getDictTables);
router.get('/dictionary/:id/tables/:name', getFieldsFromTable);

function getDictionary(req,res){
	var query = "Select * from Dictionary where dictID = " +
	req.params.id + ";"
	conn.query(query, function(err, result, fields){
		if (err) throw err;
		res.send(JSON.stringify(result));
	});
}

function getDictTables(req, res){
	var query = 'Select tableName from DDTable where dictID = ' +
	req.params.id + ' group by tableName;'
	conn.query(query, function(err, result, fields){
		if (err) throw err;
		res.send(JSON.stringify(result);
	});
}

function getFieldsFromTable(req, res){
	var query = 'Select attributeName from TableAttribute where dictID = ' +
	req.params.id + ' and tableName = "' + req.params.name + '";'
	conn.query(query, function(err, result, fields){
		if (err) throw err;
		res.send(JSON.stringify(result));
	});
}

module.exports = router;
