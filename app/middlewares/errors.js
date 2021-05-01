const DEFAULT_STATUS_CODE = 500;

const statusCodes = {
  BAD_REQUEST: 400,
  DATABASE_ERROR: 503,
  DEFAULT_ERROR: 500,
  NOT_FOUND: 404,
};

exports.handle = (error, req, res, next) => {
  if (error.internalCode) {
    res.status(statusCodes[error.internalCode] || DEFAULT_STATUS_CODE);
  } else {
    next(error);
    res.status(DEFAULT_STATUS_CODE);
  }
  return res.send({ message: error.message, internal_code: error.internalCode });
};
