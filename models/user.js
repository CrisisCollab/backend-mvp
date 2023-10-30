'use strict';
const {Model} = require('sequelize');
const Enums = require('../enums/userType');
const { DataTypes } = require('sequelize');
const {db} = require('../config/database');



module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile_no: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    user_type: {
      type: DataTypes.ENUM(Object.values(Enums)),
      allowNull: false,
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
  User.associate = (models) => {
    User.hasOne(models.Agency, { foreignKey: 'user_id' });
    // Add other associations as needed
  };

  return User;
};
