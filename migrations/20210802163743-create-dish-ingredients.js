"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Ingredients", {
      apiID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // DishId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Dishes',
      //     key: 'id'
      //   }
      // },
      IngredientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ingredients',
          key: 'IngredientId'
        }
      },
      name: {
        type: Sequelize.STRING,
        references: {
          model: 'Ingredients',
          key: 'name'
        }
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
