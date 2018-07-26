var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var PORT = 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname + '/public'))

require("./controllers/routes.js")(app);

app.listen(PORT, function(){
  console.log('app listening on port ' + PORT)
})
