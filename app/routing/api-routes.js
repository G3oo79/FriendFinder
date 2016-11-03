var surveyData = require('../data/friends.js');
// the app parameter represents Express that that is in teh server.js file///////
module.exports = function(app) {

	app.get('/api/friends', function (req, res) {
		res.json(surveyData);
	});

	/*app.post('/api/friends', function (req, res) {
		var newUser = req.body;
		newUser.route


	});*/

}