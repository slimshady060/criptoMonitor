const { Model } = require('sequelize');

module.exports = (sequelize, type) => {
  class User extends Model {
    static associate(models) {
      models.User.belongsToMany(models.Cripto, { through: 'Users_Criptos' });
    }
  }
  User.init(
    {
      name: { type: type.STRING, allowNull: false },
      lastName: { type: type.STRING, allowNull: false },
      username: { type: type.STRING, allowNull: false, unique: true },
      password: { type: type.STRING, allowNull: false },
      currency: { type: type.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
