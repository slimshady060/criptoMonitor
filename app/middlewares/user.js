const { findByUserName } = require('../services/user');
const error = require('../utils/errors');
const { compareHash } = require('../utils/crypto');

// eslint-disable-next-line consistent-return
const validateUser = async (req, res, next) => {
  try {
    const user = await findByUserName(req.body.username);
    if (!user) {
      next(error.notFound('User not found'));
    } else {
      const validatePassword = compareHash(req.body.password, user.password);
      if (validatePassword) {
        req.user = user;
        next();
      } else {
        next(error.userUnauthorized);
      }
    }
  } catch (err) {
    next(err);
  }
};

const userExists = async (req, res, next) => {
  try {
    const user = await findByUserName(req.body.username);
    if (user) next(error.userAlreadyExists);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  validateUser,
  userExists,
};
