const jwt = require('../utils/auth');
const config = require('../../config/index');
const { User, Cripto } = require('../models');
const errorHandler = require('../utils/errors/errors_handler');
const { ORDER_TYPES } = require('../utils/constants');
const { sortAsc, sortDesc } = require('../utils/utils');
const criptoService = require('./cripto');
const { mapCriptosTop } = require('../serializers/cripto');

const getCriptosFromApi = async (criptosList = []) => {
  try {
    if (criptosList.length > 0) {
      const allPromises = criptosList
        .map((cripto) => criptoService.getCriptoByIdFromApi(cripto.cId));
      const criptosFound = await Promise.all(allPromises);
      return criptosFound;
    }
    return [];
  } catch (error) {
    throw Error(error);
  }
};

const sortCriptoTop = (values, currency, orderType) => {
  if (orderType.toLowerCase() === ORDER_TYPES.DESC) return values.sort(sortDesc(currency));
  return values.sort(sortAsc(currency));
};

const generateToken = (user) => jwt.sign(
  user,
  config.auth.jwtSecret,
  { expiresIn: config.auth.jwtExprired },
);

const findByUserName = (userName) => User.findOne({
  where: { username: userName },
}).catch(errorHandler.errorDatabase);

const getUserWithCriptos = (userId) => User.findOne({
  where: { id: userId },
  include: {
    model: Cripto,
    through: {
      attributes: [],
    },
  },
}).catch(errorHandler.errorDatabase);

const createUser = (userInfo) => User.create({
  name: userInfo.name,
  lastName: userInfo.lastName,
  username: userInfo.username,
  password: userInfo.password,
  currency: userInfo.currency,
}).catch(errorHandler.errorDatabase);

const getCriptoTop = async (options, order = ORDER_TYPES.ASC) => {
  const user = await getUserWithCriptos(options.userId);
  const { Criptos: criptosList } = user;
  let response = await getCriptosFromApi(criptosList);
  response = sortCriptoTop(mapCriptosTop(response), options.userCurrency, order)
    .slice(0, options.limit);
  return response;
};

const addCriptos = (user, cripto) => user.addCripto(cripto).catch(errorHandler.errorDatabase);

module.exports = {
  findByUserName,
  generateToken,
  createUser,
  addCriptos,
  getCriptoTop,
  getCriptosFromApi,
};
