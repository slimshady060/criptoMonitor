const Sequelize = require('sequelize');

const errors = require('../errors');

const defaultErrorMessage = (err) => {
  if (err instanceof Sequelize.ForeignKeyConstraintError) {
    return 'Foreign Key Error';
  }

  if (err instanceof Sequelize.UniqueConstraintError) {
    return 'Constraint violation';
  }

  return 'Undefined error';
};

exports.errorDatabase = (e, additionalMessages = () => false) => {
  if (
    e instanceof Sequelize.ForeignKeyConstraintError
    || e instanceof Sequelize.UniqueConstraintError
  ) {
    const message = additionalMessages(e);
    return Promise.reject(errors.badRequest(message || defaultErrorMessage(e)));
  }
  return Promise.reject(errors.defaultError('Database error'));
};
