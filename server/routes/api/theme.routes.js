const router = require('express').Router();

const { Theme, Question } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll({
      include: [Question],
      order: [
        ['id', 'Asc'],
        [Question, 'id', 'Asc'],
      ],
    });
    if (themes.length) {
      res.status(200).json({ message: 'success', themes });
      return;
    }
    res.status(400).json({ message: 'Темы и вопросы не найдены' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const question = await Question.update({ isAnswered: false }, { where: { id } });
  if (question) {
    res.status(200).json({ message: 'success' });
  }
});

module.exports = router;
