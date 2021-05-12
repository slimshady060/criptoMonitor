const Sequelize = require('sequelize');

const errors = require('../errors');


const defaultErrorMessage = err => {
  if (err instanceof Sequelize.ForeignKeyConstraintError) {
    return 'Foreign Key Error';
  }

  if (err instanceof Sequelize.UniqueConstraintError) {
    return 'Constraint violation';
  }

  return 'Undefined error';
};

exports.errorDatabase = (err, additionalMessages = () => false) => {
  if (
    err instanceof Sequelize.ForeignKeyConstraintError
    || err instanceof Sequelize.UniqueConstraintError
  ) {
    const message = additionalMessages(err);
    return Promise.reject(errors.databaseError(message || defaultErrorMessage(err)));
  }
  return Promise.reject(errors.defaultError('Database error'));
};
