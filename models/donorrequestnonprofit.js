'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DonorRequestNonProfit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DonorRequestNonProfit.init({
    DonorId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    OrganizationId: DataTypes.INTEGER,
    contactInfo: DataTypes.STRING,
    program: DataTypes.STRING,
    whatIsBeingDonated: DataTypes.STRING,
    partnershipOrOneTime: DataTypes.STRING,
    quantityOfDonation: DataTypes.STRING,
    transportMethod: DataTypes.STRING,
    timeUntilDonation: DataTypes.STRING,
    paperworkRequired: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'DonorRequestNonProfit',
  });
  return DonorRequestNonProfit;
};