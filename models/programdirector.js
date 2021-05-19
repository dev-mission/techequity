'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProgramDirector extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProgramDirector.init({
    organizationName: DataTypes.STRING,
    organizationType: DataTypes.STRING,
    organizationPhoneNumber: DataTypes.INTEGER,
    organizationAddress: DataTypes.STRING,
    organizationCountry: DataTypes.STRING,
    organizationState: DataTypes.STRING,
    organizationCity: DataTypes.STRING,
    organizationDescription: DataTypes.STRING,
    partnershipDescription: DataTypes.STRING,
    OrganizationId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProgramDirector',
  });
  return ProgramDirector;
};