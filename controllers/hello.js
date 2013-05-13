hello = {
	index : function(req, res){
		 res.render('hello.html');
	},
	koplak : function(req, res){
		res.send('koplak');
	},
}
module.exports = hello;