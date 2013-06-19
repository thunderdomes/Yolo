module.exports = function Core()
{
	
	//call all modules
	var express = require('express');
	var path = require('path');
	var engine = require('ejs-locals');
	var routes = require('./routes.js');
	var config = require('./config.js');

	var app = express();
	
	///setting up
	app.set('views', __dirname + '/views');
	app.use(express.static(path.join(__dirname, 'public')));
    app.engine('ejs', engine);
    app.set('view engine', 'ejs'); // so you can render('index')

   
    var controllers = {};
    for(var route in routes)
	{
		var c = routes[route].controller;
		var a = routes[route].action || 'index';
		if(typeof controllers[c]  == 'undefined'){
			controllers[c] = require('./controllers/'+c+'.js');
		}
		if(typeof controllers[c]  != 'undefined'){
			if(typeof controllers[c][a]  == 'undefined'){
				console.log('Action '+a+' Tidak Ditemukan');
			}
			else{
				app.get(route,controllers[c][a]); 
			}
		}
		else{
			console.log('Controller '+c+' Tidak Ditemukan');
		}
	}

	app.listen(config.port);
}
