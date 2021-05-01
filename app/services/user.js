const jwt = require('../utils/auth');
const config = require('../../config/index');
const { User } = require('../models');

const generateToken = (user) => jwt.sign(
  { user },
  config.auth.jwtSecret,
  { expiresIn: config.auth.jwtExprired },
);

const findByUserName = (userName) => User.findOne({
  where: { username: userName },
});

const createUser = (userInfo) => User.create({
  name: userInfo.name,
  lastName: userInfo.lastName,
  username: userInfo.username,
  password: userInfo.password,
  currency: userInfo.currency,
});

module.exports = {
  findByUserName,
  generateToken,
  createUser,
};
