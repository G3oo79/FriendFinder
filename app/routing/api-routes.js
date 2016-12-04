var surveyData = require('../data/friends.js');
// the app parameter represents Express that that is in teh server.js file///////
module.exports = function(app) {

	app.get('/api/friends', function (req, res) {
		res.json(surveyData);
	});

	app.post('/api/friends', function (req, res) {
		//Note the code here. Our "server" will respond to request and let users know if they have a table or not.
		//It will do this by sending out the value "true" have a table.
		var currentUserScores = req.body.scores;
		var lowestDifference = 80;
		var difference = 0;
		var bestMatch = surveyData[0];

		for(var i = 0; i < surveyData.length; i++) {
			var possibleMatchScores = surveyData[i].scores;
			for(var x = 0; x < possibleMatchScores.length; x++) {
				difference += Math.abs(currentUserScores[x] - possibleMatchScores[x]);
			}

			if (difference <= lowestDifference) {
				lowestDifference = difference;
				bestMatch = surveyData[i];
			}

				difference = 0;

		}

	surveyData.push(req.body);

	res.json(bestMatch); // Key Line



	});
	app.post('/api/clear', function() {
		//Empty out the arrays data
		surveyArray = [];


	});
}
