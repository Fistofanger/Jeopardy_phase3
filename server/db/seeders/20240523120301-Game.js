'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Games',
      [
        {
          userId: 1,
          themeId: 1,
          score: 600,
          createdAt: new Date(2024, 4, 23, 2, 3, 4),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          themeId: 1,
          score: 400,
          createdAt: new Date(2024, 4, 23, 9, 1, 5),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          themeId: 2,
          score: 400,
          createdAt: new Date(2024, 4, 23, 2, 2, 8),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
  },
};
