module.exports = {
	
	// To route the home page to the "index" action of the "home" controller:
	'/' : {
		controller	: 'hello'
	},
	'/koplak' : {
		controller	: 'hello',
		action: "koplak", 
	},
	'*' : {
		controller	: 'hello'
	},

	
};