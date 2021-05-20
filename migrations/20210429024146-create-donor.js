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
      companyName: {
        type: Sequelize.STRING
      },
      webLink: {
        type: Sequelize.STRING
      },
      userRole: {
        type: Sequelize.STRING
      },
      heardAboutUs: {
        type: Sequelize.TEXT
      },
      missionVision: {
        type: Sequelize.TEXT
      },
      OrganizationId: {
        type: Sequelize.INTEGER
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
