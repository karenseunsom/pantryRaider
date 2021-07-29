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
  return queryInterface.bulkInsert('Users', [{
    firstName: 'Dummy',
    lastName: 'One',
    email: 'dummyone@email.com',
    password: 'Gibberish',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    firstName: 'Dommy',
    lastName: 'Two',
    email: 'dommytwo@email.com',
    password: 'gibberish2',
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    firstName: 'Test',
    lastName: 'Three',
    email: 'testthree@email.com',
    password: 'IDontfuckingknow',
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
