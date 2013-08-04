var config = require('../models/tes.js');
web = {

	index : function(req, res, next){
		console.log(config.bread(2,3));
		console.log(config.bro(2,3));
		 res.render('page/index', { title: config.models});
	}	
}
module.exports = web;



