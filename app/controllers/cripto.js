const coinService = require('../services/cripto');
const { responseAllCoins } = require('../serializers/coins');

const getAllCriptos = async (req, res, next) => {
  try {
    const fiters = {
      currency: req.user.currency,
      order: 'market_cap_desc',
    };
    const page = req.params.page || 1;
    const coinsList = await coinService.getAllCriptosFromApi(fiters, page);
    res.status(200).send({ data: responseAllCoins(coinsList.data), page });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllCriptos,
};
