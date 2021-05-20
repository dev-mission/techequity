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
      ProgramDirector.belongsTo(models.Organization);
      ProgramDirector.belongsTo(models.User);
    }
  };
  ProgramDirector.init({
  }, {
    sequelize,
    modelName: 'ProgramDirector',
  });
  return ProgramDirector;
};
