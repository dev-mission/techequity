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
    id: DataTypes.INTEGER,
    directorType: DataTypes.STRING,
    userOrgRole: DataTypes.STRING,
    OrgId: DataTypes.INTEGER,
    usersId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProgramDirector',
  });
  return ProgramDirector;
};