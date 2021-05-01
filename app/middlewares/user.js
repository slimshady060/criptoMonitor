const { findByUserName } = require('../services/user');
const error = require('../utils/errors');

// eslint-disable-next-line consistent-return
const validateUser = async (req, res, next) => {
  try {
    const user = await findByUserName(req.body.username);
    if (!user) next(error.notFound('User not found'));
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

const userExists = async (req, res, next) => {
  try {
    const user = findByUserName(req.body.username);
    if (user) next(error.userAlreadyExists);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  validateUser,
  userExists,
};
