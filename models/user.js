var Sequelize = require('sequelize');

module.exports = function(sequelize) {
  var User = sequelize.define('user', {
    loginId: { type: Sequelize.STRING },
    password:{ type: Sequelize.STRING }
  });

  return User;
}
