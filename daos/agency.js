const db = require('../models');
const { v4: uuidv4 } = require('uuid');


module.exports = {
    createAgency: async (value) => {
        try {
          const agency = await db.Agency.create({
            ...value,
            id: uuidv4(),
          });
      
          return agency.dataValues;
        } catch (error) {
          throw error;
        }
    },
    getAgency: async (value) => {
      try {
        const agency = await db.Agency.findOne({
          where: {
            ...value
          }
        });
    
        return agency ? agency : null;
      } catch (error) {
        throw error;
      }
  },
  getAllAgencies: async () => {
    try {
      const agencies = await db.Agency.findAll();
      return agencies;
    } catch (error) {
      throw error;
    }
  },
  findNearbyAgencies: async (lat, long, distanceInRadians) => {
    try {
      // Define the SQL query to find nearby agencies within the given radius
      const query = `
        SELECT *,
        (6371 * acos(cos(radians(:lat)) * cos(radians(lat)) * cos(radians(long) - radians(:long)) + sin(radians(:lat)) * sin(radians(lat)))
        ) AS distance
        FROM Agencies
        HAVING distance <= :distanceInRadians
      `;
  
      // Execute the query using Sequelize
      const agencies = await sequelize.query(query, {
        replacements: { lat, long, distanceInRadians },
        type: sequelize.QueryTypes.SELECT,
      });
  
      return agencies;
    } catch (error) {
      throw error;
    }
  }
};