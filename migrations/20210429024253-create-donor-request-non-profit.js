'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DonorRequestNonProfits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      DonorId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      OrginId: {
        type: Sequelize.INTEGER
      },
      contactInfo: {
        type: Sequelize.STRING
      },
      program: {
        type: Sequelize.STRING
      },
      whatIsBeingDonated: {
        type: Sequelize.STRING
      },
      partnershipOrOneTime: {
        type: Sequelize.STRING
      },
      quantityOfDonation: {
        type: Sequelize.STRING
      },
      transportMethod: {
        type: Sequelize.STRING
      },
      timeUntilDonation: {
        type: Sequelize.STRING
      },
      paperworkRequired: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('DonorRequestNonProfits');
  }
};