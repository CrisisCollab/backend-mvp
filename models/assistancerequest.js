const { Model } = require('sequelize');
const Enums = require('../enums/threatLevel');

module.exports = (sequelize, DataTypes) => {
  class AssistanceRequest extends Model {
    static associate(models) {
      AssistanceRequest.belongsTo(models.Agency, { foreignKey: 'requester_id' });
      AssistanceRequest.belongsTo(models.Agency, { foreignKey: 'acceptor_id' });
    }
  }
  AssistanceRequest.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      request_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      request_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lat: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      long: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      visuals: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      threat_level: {
        type: DataTypes.ENUM(Object.values(Enums)),
        allowNull: false,
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
      modelName: 'AssistanceRequest',
    }
  );
  return AssistanceRequest;
};
