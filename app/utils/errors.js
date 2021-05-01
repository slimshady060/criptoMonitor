const {
  BAD_REQUEST,
  NOT_FOUND,
  DEFAULT_ERROR,
  UNAUTHORIZED,
  DATABASE_ERROR,
} = require('./constants');

const notFound = (message) => ({
  internalCode: NOT_FOUND,
  message,
});

const defaultError = (message) => ({
  internalCode: DEFAULT_ERROR,
  message,
});

const badRequest = (message) => ({
  internalCode: BAD_REQUEST,
  message,
});

const unauthorized = (message) => ({
  internalCode: UNAUTHORIZED,
  message,
});

const databaseError = (message) => ({
  internalCode: DATABASE_ERROR,
  message,
});

const userAlreadyExists = databaseError('User already exists');

const userUnauthorized = unauthorized('User is not authorized');

module.exports = {
  notFound,
  defaultError,
  badRequest,
  unauthorized,
  databaseError,
  userUnauthorized,
  userAlreadyExists,
};
