const criptoService = require('../services/cripto');
const errors = require('../utils/errors');

const getCripto = async (req, res, next) => {
  try {
    const { criptoId } = req.body;
    const criptoFromDB = await criptoService.getCriptoById(criptoId);
    if (!criptoFromDB) {
      const criptoFromApi = await criptoService.getCriptoByIdFromApi(criptoId);
      if (criptoFromApi.data) {
        const criptoCreated = await criptoService.createCripto(criptoFromApi.data);
        req.cripto = criptoCreated;
        next();
      } else {
        next(errors.notFound('Cripto not found'));
      }
    } else {
      req.cripto = criptoFromDB;
      next();
    }
  } catch (error) {
    if (error.response.status === 404) next(errors.notFound('Cripto not found'));
    next(error);
  }
};

module.exports = {
  getCripto,
};
