'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Game, Question }) {
      this.hasMany(Game, { foreignKey: 'themeId' });
      this.hasMany(Question, { foreignKey: 'themeId' });
    }
  }
  Theme.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Theme',
    },
  );
  return Theme;
};
