'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          question: 'Кто я (Андрей) из Winx?',
          answer: 'текна',
          score: 100,
          themeId: 1,
          isAnswered: false,
          image: 'https://licensingrussia.ru/media/posts/d35a7073-62f4-4591-bb13-30889208e3a7.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Какой я (Андрей) метод массива?',
          answer: 'filter',
          score: 200,
          themeId: 1,
          image: 'https://habrastorage.org/webt/ar/v-/sc/arv-sc71qdyofsvexdn4y35n56q.jpeg',
          isAnswered: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Кто я (Андрей) из My Little Pony?',
          answer: 'рарити',
          score: 300,
          themeId: 1,
          image:
            'https://upload.wikimedia.org/wikipedia/ru/thumb/6/69/My_Little_Pony_Friendship_Is_Magic_mobile_game_cover_art.jpg/640px-My_Little_Pony_Friendship_Is_Magic_mobile_game_cover_art.jpg',
          isAnswered: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Кто я (Андрей) из Наруто?',
          answer: 'какаши',
          score: 400,
          themeId: 1,
          image: 'https://opis-cdn.tinkoffjournal.ru/mercury/narutooo-sasukeee-1.jpg',
          isAnswered: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Кто я (Андрей) из принцесс Дисней?',
          answer: 'жасмин',
          score: 500,
          themeId: 1,
          image: 'https://st.peopletalk.ru/wp-content/uploads/2017/07/9IXWntYJmgEx-1024x768.jpg',
          isAnswered: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Разгадайте ребус',
          answer: 'хомяк',
          score: 100,
          themeId: 2,
          image: 'https://umnazia.ru/wp-content/uploads/2019/10/Kak-reshat-rebusy-2.jpg',
          isAnswered: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Разгадайте ребус',
          answer: 'знак',
          score: 200,
          themeId: 2,
          image: 'https://umnazia.ru/wp-content/uploads/2019/10/Kak-reshat-rebusy-10.jpg',
          isAnswered: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Разгадайте ребус',
          answer: 'волк',
          score: 300,
          themeId: 2,
          image: 'https://umnazia.ru/wp-content/uploads/2019/10/Kak-reshat-rebusy-7.jpg',
          isAnswered: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Разгадайте ребус',
          answer: 'пифагор',
          score: 400,
          themeId: 2,
          image: 'https://umnazia.ru/wp-content/uploads/2019/10/Kak-reshat-rebusy-18.jpg',
          isAnswered: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: 'Разгадайте ребус',
          answer: 'узор',
          score: 500,
          themeId: 2,
          image: 'https://logiclike.com/files/media/kk/gk/67pb64wg_5e3ab5f2bfed3.jpg',
          isAnswered: false,
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
