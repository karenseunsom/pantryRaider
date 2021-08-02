'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dish Names', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      ingredient1: {
        type: Sequelize.STRING
      },
      ingredient2: {
        type: Sequelize.STRING
      },
      ingredient3: {
        type: Sequelize.STRING
      },
      ingredient4: {
        type: Sequelize.STRING
      },
      ingredient5: {
        type: Sequelize.STRING
      },
      ingredient6: {
        type: Sequelize.STRING
      },
      ingredient7: {
        type: Sequelize.STRING
      },
      ingredient8: {
        type: Sequelize.STRING
      },
      ingredient9: {
        type: Sequelize.STRING
      },
      ingredient10: {
        type: Sequelize.STRING
      },
      ingredient11: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Dish Names');
  }
};