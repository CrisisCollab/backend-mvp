const AlertDao = require('../daos/alert');
const AgencyDao = require('../daos/agency');



module.exports = {
    home: async (req, res) => {
        return res.json({
            status: 200,
            message: "Home Page"
        });
    },
    sendAlert: async (req, res) => {
        try {
          const alert = req.body;

          const sender_agency = await AgencyDao.getAgency({user_id: req.user.id});

          console.log(sender_agency);

          alert.sender_id = sender_agency.id;
    
          const newAlert = await AlertDao.createAlert(alert);
    
          return res.status(200).json({
            status: 200,
            message: 'Alert created successfully',
            alert: newAlert,
          });
        } catch (error) {
          return res.status(500).json({
            status: 500,
            message: 'Alert creation failed',
            error: error.message,
          });
        }
    },
    getAllAlerts: async (req, res) => {
        try {
          const alerts = await AlertDao.getAllAlerts();
    
          return res.status(200).json({
            status: 200,
            message: 'Alerts retrieved successfully',
            alerts: alerts,
          });
        } catch (error) {
          return res.status(500).json({
            status: 500,
            message: 'Failed to retrieve alerts',
            error: error.message,
          });
        }
    },
    getAlertsBySenderId: async (req, res) => {
        try {
          const {senderId} = req.body
    
          const alerts = await AlertDao.getAlertsBySenderId(senderId);
    
          return res.status(200).json({
            status: 200,
            message: 'Alerts retrieved by sender ID successfully',
            alerts: alerts,
          });
        } catch (error) {
          return res.status(500).json({
            status: 500,
            message: 'Failed to retrieve alerts by sender ID',
            error: error.message,
          });
        }
      },
}