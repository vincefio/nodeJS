var sequelize = require('../config/connection.js')
var Sequelize = require("sequelize");

const Guitar = sequelize.define('guitars', {
  author: {
    type: Sequelize.STRING
  },
  guitar: {
    type: Sequelize.STRING
  }
})

// force: true will drop the table if it already exists
Guitar.sync().then(() => {});

module.exports = Guitar;
