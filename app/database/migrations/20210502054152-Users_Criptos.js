module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users_Criptos', {
      userId: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      criptoId: {
        type: Sequelize.STRING,
        primaryKey: true,
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
    await queryInterface.dropTable('Users_Criptos');
  },
};
