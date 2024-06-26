require('dotenv').config();
const jwt = require('jsonwebtoken');

function verifyRefreshToken(req, res, next) {
  try {
    const { refreshToken } = req.cookies;
    const { user } = jwt.verify(refreshToken, 'refresh');

    res.locals.user = user;
    next();
  } catch ({ message }) {
    console.log(message, 'verifyRefreshToken');
    res.clearCookie('refreshToken').sendStatus(401);
  }
}

function verifyAccessToken(req, res, next) {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    const { user } = jwt.verify(accessToken, 'access');

    res.locals.user = user;
    next();
  } catch ({ message }) {
    console.log(message, 'verifyAccessToken');
    res.status(403).send({ error: message });
  }
}
module.exports = { verifyRefreshToken, verifyAccessToken };
