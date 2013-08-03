
web = {
	index : function(req, res, next){
		 res.render('page/index', { title: 'Express' });
	}
}
module.exports = web;



