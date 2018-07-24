//require the orm in model
var orm = require('../config/orm')

var burger = {
  all: function(cb) {
    orm.all(function(res){
      cb(res)
    })
  },
  add: function(name, cb){
    orm.add(name, function(res){
      cb(res)
    })
  },
  update: function(id, cb){
    orm.update(id, function(res){
      cb(res)
    })
  }
}

module.exports = burger;
