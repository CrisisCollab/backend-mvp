'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Agencies', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.STRING,
      },
      verification_status: {
        type: Sequelize.STRING,
      },
      lat: {
        type: Sequelize.DOUBLE,
        allowNull: true, // Latitude can be optional
        defaultValue: null, // Default value (null)
      },
      long: {
        type: Sequelize.DOUBLE,
        allowNull: true, // Longitude can be optional
        defaultValue: null, // Default value (null)
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Users',  // Assuming the User table name is 'Users'
          key: 'id',         // Assuming the User table's primary key is 'id'
        },
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
    return queryInterface.dropTable('Agencies');
  }
};
