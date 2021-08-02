'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Ingredients', [{
      name: 'Rice',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Beans',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      
      name: 'Pico de gallo',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Chicken',
      createdAt: new Date(),
      updatedAt: new Date()
    }, ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
