'use strict';
const { Model } = require('sequelize');
const Enums = require('../enums/verificationStatus');

module.exports = (sequelize, DataTypes) => {
  const Agency = sequelize.define('Agency', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    verification_status: DataTypes.ENUM(Object.values(Enums)),
    lat: {
      type: DataTypes.DOUBLE,
    },
    long: {
      type: DataTypes.DOUBLE,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
  });

  // Define associations here
  Agency.associate = (models) => {
    Agency.belongsTo(models.User, { foreignKey: 'user_id' });
    Agency.hasMany(models.Alert, { foreignKey: 'sender_id' });
    Agency.hasMany(models.AssistanceRequest, { foreignKey: 'requester_id' });
    Agency.hasMany(models.AssistanceRequest, { foreignKey: 'acceptor_id' });
    Agency.hasMany(models.ResourceInventory, { foreignKey: 'agency_id' });
    // Add other associations as needed
  };

  return Agency;
};

