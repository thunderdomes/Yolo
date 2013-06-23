var fs = require("fs");
var marked = require("marked"); // https://github.com/chjj/marked
web = {
	index : function(req, res, next){
		fs.readFile("./content/tes.md", "ascii", function (err, data) {
			if (err) {
				throw err;
			}
			console.log(res);
			res.render('pages/index.ejs',{
				title:"merdeka",
				content:marked(data),

		 });
		});
		 
	},
	404:function(req,res){
		res.render('layout/error_template.ejs');


	}

}
module.exports = web;