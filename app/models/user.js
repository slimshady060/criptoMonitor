const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, type) => {
  class User extends Model {
    static associate(models) {
      models.Cripto.belongsToMany(models.Cripto, { through: 'Users_Criptos' });
    }
  }
  User.init(
    {
      name: { type: type.STRING, allowNull: false },
      lastName: { type: type.STRING, allowNull: false },
      usename: { type: type.STRING, allowNull: false, unique: true },
      password: { type: type.STRING, allowNull: false },
      currency: { type: type.STRING, allowNull: false },
    },
    {
      instanceMethods: {
        generateHash(password) {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        },
        validPassword(password) {
          return bcrypt.compareSync(password, this.password);
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
