hello = {
	index : function(req, res, next){
		 res.render('hello.ejs',{ what: 'best', who: 'me' });
	},
	koplak : function(req, res, next){
		res.send('koplak');
	},
}
module.exports = hello;