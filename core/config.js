var config = {
	//put all together
	port:4000,
	database:'tripify',
	host:'localhost',
	username:'root',
	password:'',
	database_port:'3306',
	//call all modules
	express : require('express'),
	path :require('path'),
	engine :require('ejs-locals'),
	routes :require('./routes.js'),
	Sequelize : require("sequelize"),
	format :require('util').format,
	MongoClient : require('mongodb').MongoClient,

	
}
module.exports = config;