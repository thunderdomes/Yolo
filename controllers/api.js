var mysql = require('mysql');
var config = require('./../config.js');
var connection = mysql.createConnection({ host: config.host, user:config.username,  
	password: config.password, database: config.database});

api = {
	 index : function(req, res, next){
		if (connection) {
			connection.query('select * from world_regions order by name', function(err, rows, fields) {
				if (err) throw err;
				res.contentType('application/json');
				res.write(JSON.stringify(rows));
				res.end();
			});
		}
	},
	


}
module.exports = api;