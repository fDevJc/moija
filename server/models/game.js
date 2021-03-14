const Sequelize = require('sequelize');

module.exports = class Game extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        game_gubn: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        place: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        date: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        timeFrom: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        timeTo: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        timeStamp: true,
        underscored: false,
        modelName: 'Game',
        tableName: 'game',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }
};
