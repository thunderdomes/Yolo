hello = {
	index : function(req, res, next){
		var fileJSON = require('../content/hello.world.json');
		 res.render('index.ejs',{
				title:fileJSON,
				pass:"merdeka",		 	
		 });
		  
	},
	koplak : function(req, res, next){
		res.send('koplak');
	},
}
module.exports = hello;