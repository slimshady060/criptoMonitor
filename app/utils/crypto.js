const bcrypt = require('bcrypt');
const { saltRounds } = require('../../config').auth;

const toHash = (value) => bcrypt.hashSync(value, saltRounds);

module.exports = {
  toHash,
};
