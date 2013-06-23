var fs = require("fs");
var marked = require("marked"); // https://github.com/chjj/marked
web = {
	index : function(req, res, next){
		fs.readFile("./content/tes.md", "ascii", function (err, data) {
			if (err) {
				throw err;
			}
			res.render('pages/index.ejs',{
				title:"merdeka",
				content:marked(data),

		 });
		});
		 
	},

}
module.exports = web;