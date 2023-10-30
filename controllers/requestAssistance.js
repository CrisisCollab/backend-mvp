const AssistanceRequestDao = require('../daos/requestAssistance');


module.exports = {
    home: async (req, res) => {
        return res.json({
            status: 200,
            message: "Home Page"
        });
    },
    sendRequest: async (req, res) => {
        try {
          const request = req.body;
    
          const newRequest = await AssistanceRequestDao.createRequest(request);
    
          return res.status(200).json({
            status: 200,
            message: 'Assistance request created successfully',
            request: newRequest,
          });
        } catch (error) {
          return res.status(500).json({
            status: 500,
            message: 'Assistance request creation failed',
            error: error.message,
          });
        }
    },
    getAllRequests: async (req, res) => {
        try {
          const requests = await AssistanceRequestDao.getAllRequest();
    
          return res.status(200).json({
            status: 200,
            message: 'Assistance requests retrieved successfully',
            requests: requests,
          });
        } catch (error) {
          return res.status(500).json({
            status: 500,
            message: 'Failed to retrieve assistance requests',
            error: error.message,
          });
        }
    },
    requestFilter: async (req, res) => {
        try {
          const filterCriteria = req.body;
    
          const filteredRequests = await AssistanceRequestDao.requestFilter(filterCriteria);
    
          return res.status(200).json({
            status: 200,
            message: 'Assistance requests filtered successfully',
            filteredRequests: filteredRequests,
          });
        } catch (error) {
          return res.status(500).json({
            status: 500,
            message: 'Failed to filter assistance requests',
            error: error.message,
          });
        }
    }
}