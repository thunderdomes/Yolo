var fs = require("fs");
web = {
	index : function(req, res, next){
		res.render('pages/index.ejs',{
			title:"YOLO",
			content: "i'm YOLO, backend engine from nodejs and ExpressJs"
		});
	},
	404:function(req,res){
		res.render('layout/error_template.ejs');
	}

}
module.exports = web;