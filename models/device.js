'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Device.init({
    barcode: DataTypes.TEXT,
    deviceType: DataTypes.STRING,
    deviceStatus: DataTypes.STRING,
    deviceStatusDate: DataTypes.DATE,
    donatedBy: DataTypes.STRING,
    receivingOrg: DataTypes.STRING,
    OrganizationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Device',
  });
  return Device;
};