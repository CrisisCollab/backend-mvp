const db = require('../models');
const { v4: uuidv4 } = require('uuid');


module.exports = {
    createRequest: async (value) => {
        try {
            const newRequest = await db.AssistanceRequest.create({
              ...value,
              id: uuidv4()
            });
      
            return newRequest;
          } catch (error) {
            throw error;
          }
    },
    getAllRequest: async () => {
        try {
            const requests = await db.AssistanceRequest.findAll();

            return requests;
        } catch (error) {
            throw error;
        }
    },
    requestFilter: async (value) => {
        try {
            const alerts = await db.Alert.findAll({
              where: {
                value
              },
            });
            return alerts;
          } catch (error) {
            throw error;
          }
    }
}