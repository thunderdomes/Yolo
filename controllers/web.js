web = {
	index : function(req, res, next){
		 res.render('pages/index.ejs',{
				title:"merdeka",		 	
		 });
	},

}
module.exports = web;