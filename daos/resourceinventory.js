const db = require('../models');
const { v4: uuidv4 } = require('uuid');


module.exports = {
    addResource: async (value) => {
        try{
            const newResource = await db.ResourceInventory.create({
                ...value,
                id: uuidv4()
              });
        
              return newResource;
        }catch (error) {
            throw error;
        }
    },
    getAllResource: async (value) => {
        try{
            const resources = await db.ResourceInventory.findAll();
        
            return resources;
        }catch (error) {
            throw error;
        }
    },
    resourceFilter: async (value) => {
        try {
            const alerts = await db.ResourceInventory.findAll({
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