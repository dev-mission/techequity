'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Event.init({
    eventId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    eventName: DataTypes.STRING,
    eventDate: DataTypes.DATEONLY,
    eventStart: DataTypes.DATE,
    eventType: DataTypes.STRING,
    deviceId: {
      type: DataTypes.INTEGER,

      references: {
        // This is a reference to the device model
        model: Device,
        // This is the column name of the referenced model
        key: 'deviceId'
      }
    },
    OrgId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};