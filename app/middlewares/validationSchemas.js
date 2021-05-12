const yup = require('yup');
const error = require('../utils/errors');
const { CURRENCIES_LIST, ORDER_TYPES } = require('../utils/constants');

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

const newUserSchema = yup.object().shape({
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
          .oneOf(CURRENCIES_LIST, error.badRequest(`currency must be one of this values: ${CURRENCIES_LIST}`))
          .required(error.badRequest(bodyError('currency'))),
  }),
});

const addCriptoSchema = yup.object().shape({
  body: yup.object().shape({
    criptoId:
      yup.string()
        .required(error.badRequest(bodyError('criptoId'))),
  }),
});

const topSchema = yup.object().shape({
  query: yup.object().shape({
    limit: yup.number()
      .min(1, error.badRequest('limit must be greater than or equal to 1'))
      .max(25, error.badRequest('limit must be less than or equal to 25'))
      .required(error.badRequest('limit is required in query params')),
    order: yup.string()
      .oneOf([ORDER_TYPES.ASC, ORDER_TYPES.DESC], error.badRequest(`limit must be one of this values: ${[ORDER_TYPES.ASC, ORDER_TYPES.DESC]}`))
      .default(ORDER_TYPES.ASC),
  }),
});

const pageParam = yup.object().shape({
  query: yup.object().shape({
    page: yup.string()
      .matches('^[0-9]', error.badRequest('page param must be a number'))
  }),
});

module.exports = {
  loginSchema,
  newUserSchema,
  addCriptoSchema,
  topSchema,
  pageParam,
};
