const {
  BAD_REQUEST,
  NOT_FOUND,
  DEFAULT_ERROR,
  UNAUTHORIZED,
  DATABASE_ERROR,
} = require('./constants');

exports.notFound = (message) => ({
  internalCode: NOT_FOUND,
  message,
});

exports.defaultError = (message) => ({
  internalCode: DEFAULT_ERROR,
  message,
});

exports.badRequest = (message) => ({
  internalCode: BAD_REQUEST,
  message,
});

exports.unauthorized = (message) => ({
  internalCode: UNAUTHORIZED,
  message,
});

exports.unauthorized = (message) => ({
  internalCode: DATABASE_ERROR,
  message,
});
