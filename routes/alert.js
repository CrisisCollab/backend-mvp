const express = require('express');
const router = express.Router();
const Controller = require('../controllers/alert');
const {verify} = require('../middlewares/verify');




router.get('/home', verify, Controller.home);
router.post('/sendAlert', verify, Controller.sendAlert);
router.get('/allAlerts', Controller.getAllAlerts);
router.post('/alertByAgency', verify, Controller.getAlertsBySenderId);




module.exports = router;