//add dependencies
//dependencies
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mysql = require("mysql")
const ejs = require('ejs')

//set up multer
var multer  = require('multer')

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

//ejs
app.set('view engine', 'ejs')

//public folder
app.use(express.static('./public'))

//set up home route
app.get('/', (req, res) => res.render('index'))

//start server
app.listen(PORT, () => console.log('listening on port ' + PORT))
