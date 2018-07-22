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
  }
}

module.exports = orm;
