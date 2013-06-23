module.exports = {
	
	// To route the home page to the "index" action of the "home" controller:
	'/' : {
		controller	: 'web'
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