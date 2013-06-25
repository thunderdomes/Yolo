var fs = require("fs");
var sys = require('util');
var exec = require('child_process').exec;
web = {
	index : function(req, res, next){
		res.render('pages/index.ejs',{
			title:"YOLO",
			content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		});
	},
	404:function(req,res){
		res.render('layout/error_template.ejs');
	},
	pull:function(req,res){
		function puts(error, stdout, stderr) { sys.puts(stdout) }
		exec('git pull', puts);
		exec('forever restartall', puts);
		
	}

}
module.exports = web;



