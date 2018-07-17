//dependencies
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mysql = require("mysql")
var formidable = require('formidable')

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

//set up database connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'real_estate'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('mysql database running');
});

//connection.end();


//home route using sendFile
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/view.html'))
})

app.get('/sell', function(req, res){
  res.sendFile(path.join(__dirname, 'public/sell.html'))
})

app.post('/postSell', function(req, res){
  var form = new formidable.IncomingForm()

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, '/uploads');
  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);

  res.json(form)
})

//start server
app.listen(PORT, () => console.log('listening on port ' + PORT))
