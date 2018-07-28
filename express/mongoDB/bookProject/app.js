//require dependencies
var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//initialize express server
var app = express()
var PORT = 8080

//initialize bodyParser
app.use(bodyParser.json())

//set up static folder
app.use(express.static(__dirname + '/public'))

//require routes
var routes = require('./controllers/routes')(app)

//start app listening
app.listen(PORT, function(){
  console.log('app listening on port ' + PORT)
})
