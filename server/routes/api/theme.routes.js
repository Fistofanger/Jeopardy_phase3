const router = require('express').Router();

const { Theme, Question } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll({ include: [Question ] });
    if (themes.length) {
      res.status(200).json({ message: 'success', themes });
      return;
    }
    res.status(400).json({ message: 'Темы и вопросы не найдены' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
