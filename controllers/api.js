var mysql = require('mysql');
var config = require('./../config.js');
var connection = mysql.createConnection({ host: config.host, user:config.username,  
	password: config.password, database: config.database});

api = {
	index : function(req, res, next){
		var per_page=30;
		var page_now=(req.params.id -1) *per_page;

		if(page_now<0 || req.params.id ==undefined){
			page_now=0;

		}
		var total_data=0;
		if (connection) {
			connection.query('select count(id) as total  from locations', function(err, rows, fields) {
				total_data=rows[0].total;

			});
			connection.query('select * from locations order by name limit ?,??',[page_now],[per_page.toString()],function(err, rows, fields) {
				if (err) throw err;
				res.contentType('application/json');
				//res.write(JSON.stringify(rows.map(function (msg){return {msgId: msg.id}; })));
				res.writeHead(200, {
					'Content-Type': 'application/json'
				});
				res.write(JSON.stringify({ 
					count: rows.length,
					page:parseInt(req.params.id),
					total:Math.ceil( total_data/per_page),
					data:rows.map(function (msg){return {
						id: msg.id,
						name:msg.name,
						jo_name:msg.name_en}}),
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
	negara : function(req, res, next){

	}



}
module.exports = api;