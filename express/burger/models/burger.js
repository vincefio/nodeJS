//require the orm in model
var orm = require('../config/orm')

var burger = {
  all: function(cb) {
    orm.all(function(res){
      cb(res)
    })
  }
}

module.exports = burger;
