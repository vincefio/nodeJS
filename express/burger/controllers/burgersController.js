var express = require("express");

var router = express.Router();

var burger = require('../models/burger.js')

router.get("/", function(req, res) {
  //res.send('route hit')
  burger.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render('index');
  });
});


module.exports = router;
