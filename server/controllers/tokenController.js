const generateTokens = require('../utils/authUtils');

exports.tokenRefresh = (req, res) => {
  const { accessToken, refreshToken } = generateTokens({
    user: res.locals.user,
  });
  res
    .cookie('refreshToken', refreshToken, cookiesConfig)
    .status(200)
    .json({ accessToken, user: res.locals.user });
};
