const jwt = require('../utils/auth');
const { headerType, jwtSecret } = require('../../config').auth;
const errors = require('../utils/errors');
const { findByUserName } = require('../services/user');

const requireToken = (req, _, next) => {
  if (req.headers && req.headers[headerType]) {
    try {
      const token = req.headers[headerType].split(' ')[1];
      req.user = jwt.verifyToken(token, jwtSecret);
      next();
    } catch (error) {
      next(errors.badRequest('Bad Token'));
    }
  } else {
    next(errors.unauthorized('User is not authorized'));
  }
};

const getUserFromToken = async (req, _, next) => {
  try {
    const currentUser = await findByUserName(req.user.userName);
    if (!currentUser) next(errors.userAlreadyExists);
    req.user = currentUser;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  requireToken,
  getUserFromToken,
};
