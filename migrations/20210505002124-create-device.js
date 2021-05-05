'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deviceId: {
        type: Sequelize.INTEGER
      },
      barcode: {
        type: Sequelize.TEXT
      },
      deviceType: {
        type: Sequelize.STRING
      },
      deviceStatus: {
        type: Sequelize.STRING
      },
      deviceStatusDate: {
        type: Sequelize.DATE
      },
      donatedBy: {
        type: Sequelize.STRING
      },
      receivingOrg: {
        type: Sequelize.STRING
      },
      OrgId: {
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
    await queryInterface.dropTable('Devices');
  }
};