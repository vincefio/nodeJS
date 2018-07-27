//add dependencies
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mysql = require("mysql")
const ejs = require('ejs')

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

//ejs
app.set('view engine', 'ejs')

//public folder
app.use(express.static('./public'))

//set up home route
app.get('/', (req, res) => res.render('index'))

app.get('/sell', (req, res) => res.render('sell'))

app.post('/postSell', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.render('sell', {
        msg: err
      })
      console.log('ERROR')
    }else{
      //req.file is the info we would send to a database
      if(req.file == undefined){
        res.render('sell', {
          msg: 'Error: No File Selected!'
        });
      } else{
        res.render('sell', {
          msg: 'File Uploaded!',
          //file: `uploads/${req.file.filename}`
        });
      }
    }
  })
})

//start server
app.listen(PORT, () => console.log('listening on port ' + PORT))
