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
    orgName: DataTypes.STRING,
    orgType: DataTypes.STRING,
    orgID: DataTypes.STRING,
    orgEmail: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    describeOrg: DataTypes.STRING,
    describePartnerRelationship: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProgramDirector',
  });
  return ProgramDirector;
};
