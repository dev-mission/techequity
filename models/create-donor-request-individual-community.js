'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DonorRequestIndividualCommunity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DonorRequestIndividualCommunity.init({
    //id: DataTypes.INTEGER,
    DonorId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    OrginId: DataTypes.INTEGER,
    contactInfo: DataTypes.STRING,
    whatIsBeingDonated: DataTypes.STRING,
    program: DataTypes.STRING,
    
    transportMethod: DataTypes.STRING,
    timeUntilDonation: DataTypes.STRING,
    paperworkRequired: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'DonorRequestIndividualCommunity',
  });
  return DonorRequestIndividualCommunity;
};