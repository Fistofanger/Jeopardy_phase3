'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          userName: 'Andrey Savvateev',
          email: 'andrey6446@yandex.ru',
          password: '$2b$10$TucrXRPlbe.C8uq8RNLWL.6WPLRFgSJXSG8JvxWpfLg.YZYUrMwMa',
          totalScore: 666,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Juri Aristov',
          email: 'juri.aristov@gmail.com',
          password: '$2b$10$TucrXRPlbe.C8uq8RNLWL.6WPLRFgSJXSG8JvxWpfLg.YZYUrMwMa',
          totalScore: 666,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Misha',
          email: 'azarovan13@ya.ru',
          password: '$2b$10$TucrXRPlbe.C8uq8RNLWL.6WPLRFgSJXSG8JvxWpfLg.YZYUrMwMa',
          totalScore: 1488,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
