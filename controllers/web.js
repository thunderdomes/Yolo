var fs = require("fs");
var sys = require('util');
var exec = require('child_process').exec;
web = {
	index : function(req, res, next){
		res.render('pages/index.ejs',{
			title:"YOLO",
			content: " nF."
		});
	},
	404:function(req,res){
		res.render('layout/error_template.ejs');
	},
	pull:function(req,res){
		console.log("Helllllloooo");
		function puts(error, stdout, stderr) { sys.puts(stdout) }
		exec('git pull', puts);
	}

}
module.exports = web;



