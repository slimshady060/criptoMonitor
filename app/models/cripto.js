const { Model } = require('sequelize');

module.exports = (sequelize, type) => {
  class Cripto extends Model {
    static associate(models) {
      models.Cripto.belongsToMany(models.User, { through: 'Users_Criptos' });
    }
  }
  Cripto.init(
    {
      idCripto: { type: type.STRING, allowNull: false, unique: true },
      name: { type: type.STRING, allowNull: true },
      symbol: { type: type.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Cripto',
    },
  );
  return Cripto;
};
