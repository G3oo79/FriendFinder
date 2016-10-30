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
app.get('/', function (req, res) {
  res.send('Hello World')
})

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

//Added console log for confirmation purposes//
app.listen(PORT, function(){
	console.log("App Listening on PORT: " + PORT);
});