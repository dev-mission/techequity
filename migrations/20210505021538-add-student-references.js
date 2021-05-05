'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Students', {
      fields: ['UserId'],
      type: 'FOREIGN KEY',
      references: {
        table: 'Users',
        field: 'id'
      }
    });
    await queryInterface.addConstraint('Students', {
      fields: ['UserId'],
      type: 'UNIQUE'
    });
    await queryInterface.addConstraint('Students', {
      fields: ['OrganizationId'],
      type: 'FOREIGN KEY',
      references: {
        table: 'Organizations',
        field: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('Students', 'Students_UserId_Users_fk');
    await queryInterface.removeConstraint('Students', 'Students_UserId_uk');
    await queryInterface.removeConstraint('Students', 'Students_OrganizationId_Organizations_fk');
  }
};
