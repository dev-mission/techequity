'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProgramDirectors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      organizationName: {
        type: Sequelize.STRING
      },
      organizationType: {
        type: Sequelize.STRING
      },
      organizationPhoneNumber: {
        type: Sequelize.INTEGER
      },
      organizationAddress: {
        type: Sequelize.STRING
      },
      organizationCountry: {
        type: Sequelize.STRING
      },
      organizationState: {
        type: Sequelize.STRING
      },
      organizationCity: {
        type: Sequelize.STRING
      },
      organizationDescription: {
        type: Sequelize.STRING
      },
      partnershipDescription: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('ProgramDirectors');
  }
};