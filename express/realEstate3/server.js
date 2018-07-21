//dependencies
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mysql = require("mysql")

//set up multer
var multer  = require('multer')

//set storage engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

//init upload
const upload = multer({
  storage: storage
}).single('houseView')

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

//ejs
app.set('view engine', 'ejs')

//public folder
app.use(express.static('./public'))

//set up home route
app.get('/', (req, res) => res.render('index'))

app.get('/sell', (req, res) => res.render('sell'))

app.get('/buy', (req, res) => res.render('buy'))

app.post('/postSell', (req, res) =>{
  upload(req, res, (err) => {
    //res.send('uploads/' + req.file.filename)
    if(err){
  res.render('sell', {
    msg: err
  });
} else {
  if(req.file == undefined){
    res.render('sell', {
      msg: 'Error: No File Selected!'
    });
  } else {
    //console.log('req body ' + JSON.stringify(req.body))
    //console.log('req body ' + JSON.stringify(req.file))
  connection.query(
    'INSERT INTO houses(picture, city, price) VALUES (?,?,?)',
    [req.file.filename, req.body.location, req.body.price],
    function(err, results, fields){
      if(err) throw err;
      console.log('house added!')
    }
  )
  res.render('sell', {
      msg: 'File Uploaded!',
      file: `uploads/${req.file.filename}`
    });
  }
}
  })
})

//start server
app.listen(PORT, () => console.log('listening on port ' + PORT))
