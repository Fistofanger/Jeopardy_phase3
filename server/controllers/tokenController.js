const cookiesConfig = require('../config/cookiesConfig');
const generateTokens = require('../utils/authUtils');

exports.tokenRefresh = (req, res) => {
  console.log('=>', res.locals.user);
  const { accessToken, refreshToken } = generateTokens({
    user: res.locals.user,
  });
  console.log(accessToken, '=================', refreshToken);
  res
    .cookie('refreshToken', refreshToken, cookiesConfig)
    .status(200)
    .json({ message: 'success', accessToken, user: res.locals.user });
};
