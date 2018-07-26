var Guitar = require('../models/guitar.js')
var path = require('path')

module.exports = function(app){

  app.post('/add', function(req, res){
  Guitar.create({
      author: req.body.userName,
      guitar: req.body.guitarName
    })

    console.log('user added!')

    res.redirect('/')
  })

  app.get('/guitars', function(req, res){

    Guitar.findAll({}).then(results => {
      // projects will be an array of all Project instances
      return res.json(results)
    })
  })

  app.get('/', function(req, res){
    res.sendFile(__dirname + '../public/index.html')
  })
}
