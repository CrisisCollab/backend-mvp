'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alerts', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      sender_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Agencies',  // Assuming the User table name is 'Users'
          key: 'id',         // Assuming the User table's primary key is 'id'
        },
      },
      alert_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alert_content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      visuals: {
        type: Sequelize.STRING,
        allowNull: true, // This field is optional
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
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Alerts');
  }
};
