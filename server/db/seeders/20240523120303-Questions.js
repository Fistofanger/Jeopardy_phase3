'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question: 'Каким словом хозяин охарактеризовал неудачу своего питомца?',
          answer: 'фиаско',
          score: 100,
          themeId: 1,
          isAnswered: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Какое имя нам должно о чём-то говорить?',
          answer: 'Ибрагим',
          score: 200,
          themeId: 1,
          isAnswered: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'За за какое место для посиделок данный персонаж списывает 100 рублей?',
          answer: 'пенек',
          score: 300,
          themeId: 1,
          isAnswered: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Лимур призывает вас к какому-ту действию, что нужно сделать?',
          answer: 'узбагоиться',
          score: 400,
          themeId: 1,
          isAnswered: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Как звали мальчика из данного мема?',
          answer: 'Саша',
          score: 500,
          themeId: 1,
          isAnswered: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Угадайте название фильма',
          answer: 'шоу трумана',
          score: 100,
          themeId: 2,
          isAnswered: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Угадайте название фильма',
          answer: 'сияние',
          score: 200,
          themeId: 2,
          isAnswered: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Угадайте название фильма',
          answer: 'титаник',
          score: 300,
          themeId: 2,
          isAnswered: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Угадайте название фильма',
          answer: 'заводной апельсин',
          score: 400,
          themeId: 2,
          isAnswered: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Угадайте название фильма',
          answer: 'властелин колец',
          score: 500,
          themeId: 2,
          isAnswered: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
