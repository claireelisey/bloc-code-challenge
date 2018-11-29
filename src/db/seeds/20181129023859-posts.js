'use strict';

const faker = require("faker");

let posts = [];

for(let i = 1 ; i <= 15 ; i++){
    posts.push({
        body: faker.hacker.phrase(),
        createdAt: new Date(),
        updatedAt: new Date()
    });
}

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("Posts", posts, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Posts", null, {});
    }
};