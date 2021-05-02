const jwt = require('../utils/auth');
const config = require('../../config/index');
const { User } = require('../models');
const errorHandler = require('../utils/errors/errors_handler');

const generateToken = (user) => jwt.sign(
  user,
  config.auth.jwtSecret,
  { expiresIn: config.auth.jwtExprired },
);

const findByUserName = (userName) => User.findOne({
  where: { username: userName },
}).catch(errorHandler.errorDatabase);

const createUser = (userInfo) => User.create({
  name: userInfo.name,
  lastName: userInfo.lastName,
  username: userInfo.username,
  password: userInfo.password,
  currency: userInfo.currency,
}).catch(errorHandler.errorDatabase);

const addCriptos = (user, cripto) => user.addCripto(cripto).catch(errorHandler.errorDatabase);

module.exports = {
  findByUserName,
  generateToken,
  createUser,
  addCriptos,
};
