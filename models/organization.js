'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Organization.hasMany(models.ProgramDirector);
      Organization.hasMany(models.Student);      
    }
  };
  Organization.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.TEXT,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    description: DataTypes.TEXT,
    partnershipDescription: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Organization',
  });
  return Organization;
};
