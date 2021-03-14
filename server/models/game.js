const Sequelize = require('sequelize');

module.exports = class Game extends Sequelize.Model {
  static init(sequelize) {
    return super.init();
  }
};
