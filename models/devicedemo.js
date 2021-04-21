'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeviceDemo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DeviceDemo.init({
    id: DataTypes.INTEGER,
    barcode: DataTypes.TEXT,
    deviceType: DataTypes.STRING,
    deviceStatus: DataTypes.STRING,
    deviceStatusDate: DataTypes.DATE,
    donatedBy: DataTypes.STRING,
    recievingOrg: DataTypes.STRING,
    OrgId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DeviceDemo',
  });
  return DeviceDemo;
};