'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Donor.belongsTo(models.User);
      // define association here
    }
  };
  Donor.init({
    donorType: DataTypes.STRING,
    companyName: DataTypes.STRING,
    webLink: DataTypes.STRING,
    userRole: DataTypes.STRING,
    missionVision: DataTypes.STRING,
    heardAboutUs: DataTypes.STRING,
    OrganizationId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Donor',
  });
  return Donor;
};
