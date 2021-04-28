const jwt = require('jsonwebtoken');

exports.sign = (payload, secret, options = {}) => jwt.sign(payload, secret, options);
exports.verify = (token, secret) => jwt.verify(token, secret);
