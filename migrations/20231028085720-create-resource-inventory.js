'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ResourceInventories', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      agency_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Agencies', // Assuming the Agency table name is 'Agencies'
          key: 'id', // Assuming the Agency table's primary key is 'id'
        },
      },
      resource_name: {
        type: Sequelize.STRING,
      },
      condition: {
        type: Sequelize.STRING,
      },
      lat: {
        type: Sequelize.DOUBLE,
      },
      long: {
        type: Sequelize.DOUBLE,
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
    return queryInterface.dropTable('ResourceInventories');
  }
};
