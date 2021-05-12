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

// check errors to external request
const checkTypeError = err => {
  if (err.status >= 300 && err.status < 400) {
    throw defaultError(err.data.error);
  }
  if (err.status >= 400 && err.status < 500) {
    if(err.status == 404) throw notFound(err.data.error)
    throw badRequest(err.data.error);
  }
  if (err.status >= 500) {
    throw defaultError(err.data.error);
  }
}

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
  checkTypeError,
};
