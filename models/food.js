var Sequelize = require('sequelize');

module.exports = function(sequelize) {
  var Food = sequelize.define('food', {
    name:  { type: Sequelize.STRING },
    maker: { type: Sequelize.STRING }
  });

  return Food;
}
