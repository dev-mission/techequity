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
    }
  };
  Organization.init({
    id: DataTypes.INTEGER,
    orgName: DataTypes.STRING,
    orgPhone: DataTypes.INTEGER,
    orgEmail: DataTypes.CITEXT,
    workingWithRec: DataTypes.BOOLEAN,
    workingWithDist: DataTypes.BOOLEAN,
    orgType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Organization',
  });
  return Organization;
};