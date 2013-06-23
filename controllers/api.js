var mysql = require('mysql');
var config = require('./../config.js');
var connection = mysql.createConnection({ host: config.host, user:config.username,  
	password: config.password, database: config.database});

api = {
	 index : function(req, res, next){
		if (connection) {
			connection.query('select * from locations order by name limit 0,30', function(err, rows, fields) {
				if (err) throw err;
				res.contentType('application/json');
				//res.write(JSON.stringify(rows.map(function (msg){return {msgId: msg.id}; })));
				console.log(rows);
				res.write(JSON.stringify({ 
					count: rows.length,
					page:1,
					data:rows.map(function (msg){return {
						id: msg.id,
						name:msg.name,}}),
					})
				);
				res.end();
			});
			connection.on('close', function(err) {
  				if (err) {
   				 	connection = mysql.createConnection(connection.config);
  				} else {
   					 console.log('Connection closed normally.');
  				}
			});
		}
	},


}
module.exports = api;