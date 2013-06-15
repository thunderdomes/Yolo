module.exports = {
	
	// To route the home page to the "index" action of the "home" controller:
	'/' : {
		controller	: 'hello'
	},
	'/koplak' : {
		controller	: 'hello',
		action: "koplak", 
	},
	'/koplak2' : {
		controller	: 'hello',
		action: "koplak2",
	},
};