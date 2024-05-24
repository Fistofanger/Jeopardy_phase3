// controllers/userController.js
const bcrypt = require('bcrypt');
// const prisma = require('../prisma/client');
const generateTokens = require('../utils/authUtils');
const cookiesConfig = require('../config/cookiesConfig');
const { User } = require('../../server/db/models');

// exports.getUserById = async (req, res) => {
//   try {
//     const { id } = res.locals.user;
//     const user = await User.findOne({ where: { id } });

//     delete user.password;
//     const { accessToken, refreshToken } = generateTokens({ user });

//     return res
//       .cookie('refreshToken', refreshToken, cookiesConfig)
//       .status(200)
//       .json({ message: 'success', accessToken, user });
//   } catch ({ message }) {
//     res.status(500).json({ message });
//   }
// };

exports.createUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const userInDb = await User.findOne({ where: { email } });
    if (userInDb) {
      return res
        .status(400)
        .json({ message: 'Пользователь с таким email уже существует' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      totalScore: 0,
    });

    delete user.password;

    const { accessToken, refreshToken } = generateTokens({ user });

    res
      .status(201)
      .cookie('refreshToken', refreshToken, cookiesConfig)
      .json({ message: 'success', user, accessToken });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль или email' });
    }

    delete user.password;
    const { accessToken, refreshToken } = generateTokens({ user });

    return res
      .cookie('refreshToken', refreshToken, cookiesConfig)
      .status(200)
      .json({ message: 'success', accessToken, user });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

exports.logoutUser = (req, res) => {
  res.locals.user = undefined;
  res.clearCookie('refreshToken').json({ message: 'success' });
};
