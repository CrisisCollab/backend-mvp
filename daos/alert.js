const db = require('../models');
const { v4: uuidv4 } = require('uuid');


module.exports = {
    createAlert: async (value) => {
        try {
          // Create a new alert in the database
          const newAlert = await db.Alert.create({
            ...value,
            id: uuidv4()
          });
    
          return newAlert;
        } catch (error) {
          throw error;
        }
    },
    getAllAlerts: async () => {
        try {
            const alerts = await db.Alert.findAll();

            return alerts;
        } catch (error) {
            throw error;
        }
    },
    getAlertsBySenderId: async (senderId) => {
        try {
          const alerts = await db.Alert.findAll({
            where: {
              sender_id: senderId,
            },
          });
          return alerts;
        } catch (error) {
          throw error;
        }
    },
}