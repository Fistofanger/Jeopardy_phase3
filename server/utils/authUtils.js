require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

function generateTokens(payload) {
  return {
    accessToken: jwt.sign(payload, 'access', jwtConfig.access),
    refreshToken: jwt.sign(payload, 'refresh', jwtConfig.refresh),
  };
}

module.exports = generateTokens;
