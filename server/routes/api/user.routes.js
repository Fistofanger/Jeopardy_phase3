const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const userController = require('../../controllers/userController');
const {
  verifyRefreshToken,
  verifyAccessToken,
} = require('../../middlewares/authMiddleware');

// router.get('/check', verifyAccessToken, userController.getUserById);

router.post(
  '/',
  [
    body('userName').notEmpty().withMessage('Имя обязательно'),
    body('email').isEmail().withMessage('Неверный формат email'),
    body('password')
      .isLength({ min: 3 })
      .withMessage('Пароль должен содержать минимум 3 символов'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  userController.createUser
);

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Неверный формат email'),
    body('password')
      .isLength({ min: 3 })
      .withMessage('Пароль должен содержать минимум 3 символов'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  userController.loginUser
);

router.get('/logout', userController.logoutUser);

module.exports = router;
