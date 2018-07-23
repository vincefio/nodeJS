var express = require('express')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')  
var methodOverride = require("method-override");

var app = express()
var router = express.Router()
var port = 8080

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require('./controllers/burgersController.js')
app.use('/', routes)

app.listen(port, function(){
  console.log('app listening on ' + port)
})
