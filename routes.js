module.exports = {
	
	// To route the home page to the "index" action of the "home" controller:
	'/' : {
		controller	: 'web'
	},
	'/dev/pull/master/' : {
		controller	: 'web',
		action: 'pull'
	},
	'/api/:id' : {
		controller	: 'api',
	},
	'/api/' : {
		controller	: 'api',
	},
	'/api/negara/:id' : {
		controller	: 'api',
		action: 'negara'
	},
	'*':{
		controller:'web',
		action:'404'
	}
	

	
};