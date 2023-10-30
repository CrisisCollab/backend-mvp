'use strict';
// const Enums = require('../enums/threatLevel');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AssistanceRequests', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      requester_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Agencies', // Assuming the Agency table name is 'Agencies'
          key: 'id', // Assuming the Agency table's primary key is 'id'
        },
      },
      acceptor_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Agencies', // Assuming the Agency table name is 'Agencies'
          key: 'id', // Assuming the Agency table's primary key is 'id'
        },
      },
      request_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      request_description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      lat: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      long: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      visuals: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      threat_level: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AssistanceRequests');
  }
};
