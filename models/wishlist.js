var Sequelize = require('sequelize');

module.exports = function(sequelize) {
  var Wishlist = sequelize.define('wishlist', {
    memo: { type: Sequelize.STRING}
  });

  return Wishlist;
}
