//+++++++++Requiring Npm modules to be used in my functions+++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++ +++++++++++++++++++++
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
//Created an instance to hold objects///
var app = express();
//created this variable and assigned a port so it would work with local host//
//and with a live host////////
var PORT = process.env.PORT || 4040;
 //Routes for local host

// Bodyparse application/x-www-form-urlencoded 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text())
app.use(bodyParser.json({type:'application/vnd.api+json'}));
 
//pulling data to display inside html pages///////
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//Added console log for confirmation purposes that the server started succesfully.//
app.listen(PORT, function(){
	console.log("App Listening on PORT: " + PORT);
});