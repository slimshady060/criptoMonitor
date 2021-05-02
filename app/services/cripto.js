const { rq } = require('../utils/fetch');
const config = require('../../config');
const { LIMIT_PAGE } = require('../utils/constants');
const { Cripto } = require('../models');
const errHandler = require('../utils/errors/errors_handler');

// external api
const getAllCriptosFromApi = (filter, page = 1) => rq({
  url: `${config.externalUrl.coingecko}coins/markets`,
  method: 'get',
  params: {
    vs_currency: filter.currency,
    order: filter.order,
    per_page: LIMIT_PAGE,
    page,
  },
});

const getCriptoByIdFromApi = (id) => rq({
  url: `${config.externalUrl.coingecko}/coins/${id}`,
  method: 'get',
  params: {
    ocalization: false,
    tickers: false,
    market_data: true,
    community_data: false,
    developer_data: false,
    sparkline: false,
  },
});

// BD
const getCriptoById = (id) => Cripto.findOne({
  where: { cId: id },
}).catch(errHandler.errorDatabase);

const createCripto = ({ id, symbol, name }) => Cripto.create({
  cId: id,
  name,
  symbol,
}).catch(errHandler.errorDatabase);

module.exports = {
  getAllCriptosFromApi,
  getCriptoById,
  getCriptoByIdFromApi,
  createCripto,
};
