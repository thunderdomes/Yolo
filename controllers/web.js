var fs = require("fs");
var sys = require('util');
var exec = require('child_process').exec;
web = {
	index : function(req, res, next){
		res.render('pages/index.ejs',{
			title:"YOLO",
			content: " ns of Lorem Ipsum."
		});
	},
	404:function(req,res){
		res.render('layout/error_template.ejs');
	},
	pull:function(req,res){
		console.log("Helllllloooo");
		function puts(error, stdout, stderr) { sys.puts(stdout) }
		exec('sudo git pull', puts);
		exec('pwd##jsn##server@@2009', puts);
		
	}

}
module.exports = web;



