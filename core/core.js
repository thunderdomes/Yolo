module.exports = function Core()
{
	var db = require('./db.js');
	var config = require('./config.js');
	var app = config.express();
	///setting up
	app.set('views');
	app.use(config.express.static(config.path.join('public')));
    app.set('view engine', 'jade'); // so you can render('index')
    app.set('view options',{layout:false});

    var controllers = {};
    for(var route in config.routes)
    {
    	var c = config.routes[route].controller;
    	var a = config.routes[route].action || 'index';
    	if(typeof controllers[c]  == 'undefined'){
    		controllers[c] = require('../controllers/'+c+'.js');
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
