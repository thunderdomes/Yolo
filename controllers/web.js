var fs = require("fs");
var sys = require('util');
var exec = require('child_process').exec;
web = {
	index : function(req, res, next){
		res.render('pages/index.ejs',{
			title:"YOLO",
			content: " Hell o World."
		});
	},
	404:function(req,res){
		res.render('layout/error_template.ejs');
	}

}
module.exports = web;



