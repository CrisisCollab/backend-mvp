const ResourceInventoryDao = require('../daos/resourceinventory');



module.exports = {
    home: async (req, res) => {
        return res.json({
            status: 200,
            message: "Home Page"
        });
    },
    addResource: async (req, res) => {
        try {
          const resource = req.body;
    
          const newResource = await ResourceInventoryDao.addResource(request);
    
          return res.status(200).json({
            status: 200,
            message: 'Resource Inventory added successfully',
            resource: newResource,
          });
        } catch (error) {
          return res.status(500).json({
            status: 500,
            message: 'Resource Inventory addition failed',
            error: error.message,
          });
        }
    },
    getAllRequests: async (req, res) => {
        try {
          const resources = await ResourceInventoryDao.getAllResource();
    
          return res.status(200).json({
            status: 200,
            message: 'Resource Inventory retrieved successfully',
            resources,
          });
        } catch (error) {
          return res.status(500).json({
            status: 500,
            message: 'Failed to retrieve resource inventory',
            error: error.message,
          });
        }
    },
    resourceFilter: async (req, res) => {
        try {
          const filterCriteria = req.body;
    
          const filteredResources = await ResourceInventoryDao.resourceFilter(filterCriteria);
    
          return res.status(200).json({
            status: 200,
            message: 'Resource Inventory filtered successfully',
            filteredResources,
          });
        } catch (error) {
          return res.status(500).json({
            status: 500,
            message: 'Failed to filter resource inventory',
            error: error.message,
          });
        }
    }
}