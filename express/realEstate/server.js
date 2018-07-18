//dependencies
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mysql = require("mysql")
var formidable = require('formidable')

//set up multer
var multer  = require('multer')

//set storage engine
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

//init upload
const upload = multer({
  storage: storage
}).single('filename')


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
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      console.log('error muthafucka')
      return
    }
    else{
    // Everything went fine
    console.log(req.file)
    res.send('test')
    }
  })
})

//start server
app.listen(PORT, () => console.log('listening on port ' + PORT))
