'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Organizations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orgName: {
        type: Sequelize.STRING
      },
      orgPhone: {
        type: Sequelize.INTEGER
      },
      orgEmail: {
        type: Sequelize.CITEXT
      },
      workingWithRec: {
        type: Sequelize.BOOLEAN
      },
      workingWithDist: {
        type: Sequelize.BOOLEAN
      },
      orgType: {
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
    await queryInterface.dropTable('Organizations');
  }
};