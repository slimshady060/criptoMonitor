const jwt = require('../utils/auth');
const { headerType, jwtSecret } = require('../../config').auth;
const errors = require('../utils/errors');

const requireToken = (req, _, next) => {
  if (req.headers && req.headers[headerType]) {
    try {
      const token = req.headers[headerType].split(' ')[1];
      const user = jwt.verifyToken(token, jwtSecret);
      req.user = user;
      next();
    } catch (error) {
      next(errors.badRequest('Invalid Token'));
    }
  } else {
    next(errors.badRequest('authorization not found'));
  }
};

module.exports = {
  requireToken,
};
