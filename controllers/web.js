var fs = require("fs");
var sys = require('util');
var exec = require('child_process').exec;
web = {
	index : function(req, res, next){
		res.render('pages/index.ejs',{
			title:"YOLO",
			content: "i'm YOLO, backend engine from nodejs and ExpressJs"
		});
	},
	404:function(req,res){
		res.render('layout/error_template.ejs');
	},
	pull:function(req,res){
		function puts(error, stdout, stderr) { sys.puts(stdout) }
		exec("git pull", puts);
		
	}

}
module.exports = web;



