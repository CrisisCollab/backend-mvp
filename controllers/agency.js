const AgencyDao = require('../daos/agency');


module.exports = {
    home: async (req, res) => {
        return res.json({
            status: 200,
            message: 'Home page'
        })
    },
    createAgency: async (req, res) => {
        try {
          const existingAgency = await AgencyDao.getAgency({ user_id: req.user.id });
      
          if (existingAgency) {
            return res.status(400).json({
              status: 400,
              message: 'User already has an agency',
            });
          }
      
          const agencyData = req.body;
          agencyData.user_id = req.user.id;
      
          const newAgency = await AgencyDao.createAgency(agencyData);
      
          return res.status(201).json({
            status: 201,
            message: 'Agency created successfully',
            agency: newAgency,
          });
        } catch (error) {
          return res.status(500).json({
            status: 500,
            message: 'Failed to create an agency',
            error: error.message,
          });
        }
    },
    getAllAgency: async (req, res) => {
        try {
            // Call the DAO function to get all agencies
            const agencies = await AgencyDao.getAllAgencies();
        
            return res.status(200).json({
              status: 200,
              message: 'All agencies retrieved successfully',
              agencies: agencies,
            });
          } catch (error) {
            return res.status(500).json({
              status: 500,
              message: 'Failed to retrieve agencies',
              error: error.message,
            });
          }
    },
    nearbyAgency: async (req, res) => {
        try {
            const { lat, long, distance } = req.body;
            if (!lat || !long || !distance) {
              return res.status(400).json({
                status: 400,
                message: 'Latitude, longitude, and distance are required.',
              });
            }
        
            // Calculate the distance in radians (based on the Earth's radius)
            const distanceInRadians = distance / EARTH_RADIUS;
        
            // Use Sequelize's `literal` method to calculate distances using SQL
            const agencies = await AgencyDao.findNearbyAgencies(lat, long, distanceInRadians);
        
            return res.status(200).json({
              status: 200,
              message: 'Nearby agencies retrieved successfully',
              agencies: agencies,
            });
          } catch (error) {
            return res.status(500).json({
              status: 500,
              message: 'Failed to retrieve nearby agencies',
              error: error.message,
            });
          }
    }
}