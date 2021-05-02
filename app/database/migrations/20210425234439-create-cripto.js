module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Criptos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      cId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      symbol: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Criptos');
  },
};
