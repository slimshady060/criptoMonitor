const yup = require('yup');
const error = require('../utils/errors');
const currenciesList = require('../utils/constants').CURRENCIES_LIST;

const bodyError = (message) => `Body doesn't have ${message} field`;
const lengthError = (field, typeLength, length) => `${field} must be ${typeLength} ${length} characters`;

const loginSchema = yup.object().shape({
  body: yup.object().shape({
    username:
      yup.string()
        .required(error.badRequest(bodyError('username'))),
    password:
      yup.string(error.badRequest('password must be string'))
        .strict(true)
        .required(error.badRequest(bodyError('password'))),
  }),
});

const userSchema = yup.object().shape({
  body: yup.object().shape({
    name:
      yup.string()
        .required(error.badRequest(bodyError('password')))
        .max(200, error.badRequest(lengthError('name', 'maximum', 200))),
    lastName:
      yup.string()
        .max(200, error.badRequest(lengthError('lastName', 'maximum', 200)))
        .required(error.badRequest(bodyError('lastName'))),
    username:
        yup.string()
          .max(200, error.badRequest(lengthError('username', 'maximum', 200)))
          .required(error.badRequest(bodyError('username'))),
    password:
        yup.string()
          .strict(true)
          .max(50, error.badRequest(lengthError('password', 'maximum', 50)))
          .required(error.badRequest(bodyError('password'))),
    currency:
        yup.string()
          .max(8, error.badRequest(lengthError('currency', 'maximum', 8)))
          .oneOf(currenciesList, error.badRequest(`currency must be one of this list ${currenciesList}`))
          .required(error.badRequest(bodyError('currency'))),
  }),
});

module.exports = {
  loginSchema,
  userSchema,
};
