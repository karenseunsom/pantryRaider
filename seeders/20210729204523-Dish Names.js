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
     return queryInterface.bulkInsert('Dish Names', [{
      name: 'Grilled Chicken with Rice and Beans and Pico de Gallo',
      ingredient1: 'rice',
      ingredient2: 'beans',
      ingredient3: 'pico de gallo',
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
