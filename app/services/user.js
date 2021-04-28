const jwt = require('../utils/auth');
const config = require('../../config/index');
const User = require('../models').user;
const errorHandler = require('../utils/errors/errors_handler');

exports.generateToken = (userInfo) => jwt.sign({
  user: userInfo,
}, config.auth.jwtSecret, { expiresIn: config.auth.jwtExprired });

exports.findOne = (filters) => {
  const condition = { where: filters };
  return User.findOne(condition).catch(errorHandler.errorDatabase);
};
