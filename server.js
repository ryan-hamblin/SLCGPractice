var express = require('express');
var bodyParser = require('body-parser');
var database = require('./liarDataBase');
var Sequelize = require('sequelize');

var app = express();

app.use (bodyParser.json());

//Connection
var connection = new Sequelize('calcWatches', 'root', 'August13', 
	{
		host: 'localhost'
	}
);

//Model
var Watch = connection.define('watch', 
	{
		color: Sequelize.STRING,
		price: Sequelize.FLOAT,
		brand: Sequelize.STRING
	})

//End Point
app.get('/watches', function(req, res){
	console.log("GET watches request...")
	Watch.all().then(function(data){
		res.send(data);
	});
});

try {
	connection.sync();
}

catch(err) {
	console.log('database error: ' + err);
}



app.get('/', function (req, res){
	res.send(database.getFriends());
});













app.listen(3000);