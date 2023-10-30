const { Model } = require('sequelize');
const Enums = require('../enums/resourceCondition');

module.exports = (sequelize, DataTypes) => {
  class ResourceInventory extends Model {
    static associate(models) {
      ResourceInventory.belongsTo(models.Agency, { foreignKey: 'agency_id' });
    }
  }
  ResourceInventory.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      resource_name: {
        type: DataTypes.STRING,
      },
      condition: {
        type: DataTypes.ENUM(Object.values(Enums)),
      },
      lat: {
        type: DataTypes.DOUBLE,
      },
      long: {
        type: DataTypes.DOUBLE,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ResourceInventory',
    }
  );
  return ResourceInventory;
};
