var Sequelize = require('sequelize');

module.exports = function(sequelize) {
  var ReviewImage = sequelize.define('review_image', {
    fieldname: { type: Sequelize.STRING },
    originalname: { type: Sequelize.STRING },
    encoding: { type: Sequelize.STRING },
    mimetype: { type: Sequelize.STRING },
    destination: { type: Sequelize.STRING },
    filename: { type: Sequelize.STRING },
    path: { type: Sequelize.STRING },
    size: { type: Sequelize.INTEGER }
  });

  return ReviewImage;
}
