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
      
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      

      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      

      createdAt: new Date(),
      updatedAt: new Date()
    },     {
      name: '',
      ingredient1: '',
      ingredient2: '',
      ingredient3: '',
      ingredient4: '',
      ingredient5: '',
      ingredient6: '',
      ingredient7: '',
      ingredient8: '',

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
