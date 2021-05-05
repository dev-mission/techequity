'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Donors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      donorType: {
        type: Sequelize.STRING
      },
      userRole: {
        type: Sequelize.STRING
      },
      OrganizationId: {
        type: Sequelize.INTEGER
      },
      webLink: {
        type: Sequelize.STRING
      },
      heardAboutUs: {
        type: Sequelize.TEXT
      },
      missionVision: {
        type: Sequelize.TEXT
      },
      UserId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Donors');
  }
};