const coinService = require('../services/cripto');
const { responseAllCoins } = require('../serializers/cripto');

const getAllCriptos = async (req, res, next) => {
  try {
    let page;
    const fiters = {
      currency: req.user.currency,
      order: 'market_cap_desc',
    };
    if (req.query.page) page = Number(req.query.page);
    const coinsList = await coinService.getAllCriptosFromApi(fiters, page);
    res.status(200).send({ data: responseAllCoins(coinsList.data), page });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllCriptos,
};
