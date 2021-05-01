const bcrypt = require('bcrypt');
const { saltRounds } = require('../../config').auth;

const toHash = (value) => bcrypt.hashSync(value, saltRounds);
const compareHash = (data, encrypted) => bcrypt.compareSync(data, encrypted);

module.exports = {
  toHash,
  compareHash,
};
