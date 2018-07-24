//require connection inside orm
var connection = require('./connection')

var orm = {
  all: function(cb){
    connection.query('SELECT * FROM burgers;', function(err, result){
      if (err) {
        throw err;
      }
      cb(result);
    })
  },
  add: function(name, cb){
  /*  connection.query('INSERT INTO burgers(burger_name) VALUES (?)', [name], function(err, result){
      if (err) {
        throw err;
      }
      cb(result);
    })*/
    connection.query('INSERT INTO burgers SET ?', {burger_name: name}, function(err, result){
      if (err) {
        throw err;
      }
      cb(result);
    })
  }
}

module.exports = orm;
