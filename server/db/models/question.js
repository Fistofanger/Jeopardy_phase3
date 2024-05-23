'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme }) {
      this.belongsTo(Theme, { foreignKey: 'themeId' });
    }
  }
  Question.init(
    {
      question: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
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
      modelName: 'Question',
    },
  );
  return Question;
};
