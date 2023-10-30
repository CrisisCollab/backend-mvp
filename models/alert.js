const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  const Alert = sequelize.define('Alert', {
    id: {
      type: DataTypes.UUID, // Change the data type to UUID
      defaultValue: DataTypes.UUIDV4, // Set a default UUID value
      primaryKey: true,
      allowNull: false,
    },
    alert_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alert_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    visuals: {
      type: DataTypes.STRING,
    },
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: true, // Latitude can be optional
      defaultValue: null, // Default value (null)
    },
    long: {
      type: DataTypes.DOUBLE,
      allowNull: true, // Longitude can be optional
      defaultValue: null, // Default value (null)
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

  // Define associations here if needed
  Alert.associate = (models) => {
    Alert.belongsTo(models.Agency, { foreignKey: 'sender_id' });
  }
  return Alert;
};
