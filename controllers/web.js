var fs = require("fs");
var sys = require('sys');
var exec = require('child_process').exec;
var gith = require('gith').create( 7000 );
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
		exec("./pull.sh", puts);
	}

}
module.exports = web;



