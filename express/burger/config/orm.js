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
    connection.query('INSERT INTO burgers SET ?', {burger_name: name}, function(err, result){
      if (err) {
        throw err;
      }
      cb(result);
    })
  },
  update: function(id, cb){
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: id}], function(err, result){
      if (err) {
        throw err;
      }
      cb(result);
    })
  }
}

module.exports = orm;
