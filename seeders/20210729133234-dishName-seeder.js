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
    name: 'Grilled Chicken with Rice and Beans and Pico de Gallo',
    
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    name: '',
    createdAt: new Date(),
    updatedAt: new Date()
  }])
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
