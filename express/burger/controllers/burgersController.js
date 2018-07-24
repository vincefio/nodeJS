var express = require("express");

var router = express.Router();

var burger = require('../models/burger.js')

router.get("/", function(req, res) {
  //res.send('route hit')
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/add', function(req, res){
  //res.send(req.body)
  burger.add(req.body.burgerName, function(data){
    res.redirect('/')
  })
})

router.put('/:id', function(req, res){
  burger.update(req.params.id, function(data){
    res.redirect('/')
  })
})

module.exports = router;
