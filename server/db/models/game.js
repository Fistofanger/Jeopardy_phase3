'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({ User, Theme }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Theme, { foreignKey: 'themeId' });
    }
  }
  Game.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      themeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
      },
      score: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Game',
    },
  );
  return Game;
};
