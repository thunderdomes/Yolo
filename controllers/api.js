var config = require('../core/config.js');

api = {
	index : function(req, res, next){
		var per_page=30;
		var page_now=(req.params.id -1) *per_page;

		if(page_now<0 || req.params.id ==undefined){
			page_now=0;

		}
		var total_data=0;
		config.Sequelize.query("SELECT * FROM users").success(function(myTableRows) {
			console.log(myTableRows.length);
			res.contentType('application/json');
			res.writeHead(200, {
				'Content-Type': 'application/json'
			});
			res.write(JSON.stringify({
				count: myTableRows.length,
			}));
			res.end();
		});
		}



	}
	module.exports = api;
