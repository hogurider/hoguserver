var Sequelize = require('sequelize');

module.exports = function(sequelize) {
  var Review = sequelize.define('review', {
    comment: { type: Sequelize.STRING }
  });

  return Review;
}
