'use strict';
const faker = require("faker");

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const posts = [...Array(20)].map(() => ({
      name: faker.lorem.word(),
      content: faker.lorem.words(),
      userEmail: faker.internet.email(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return await queryInterface.bulkInsert("Posts", posts, {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Posts", null, {});
  }
};