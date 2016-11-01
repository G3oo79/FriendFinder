//Help the user go to the survey parameter//////////
//++++++++++++++++++++++++++++++
var path = require('path');

module.exports = function (app) {
	//Display the survey page
	app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
});
	//Display the home page.
	app.use( function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});


}