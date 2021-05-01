const jwt = require('jsonwebtoken');

exports.sign = (payload, secret, options = {}) => jwt.sign(payload, secret, options);
exports.verifyToken = (token, secret) => jwt.verify(token, secret, (err, decode) => {
  if (err) throw new Error(err);
  return decode;
});
