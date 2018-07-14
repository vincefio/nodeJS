//dependencies
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

//set up app
var app = express()
var PORT = 8080

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

//start server
app.listen(PORT, () => console.log('listening on port ' + PORT))
