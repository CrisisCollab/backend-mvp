const express = require('express');
const router = express.Router();
const Controller = require('../controllers/requestAssistance');
const {verify} = require('../middlewares/verify');




router.get('/home', verify, Controller.home);
router.post('/sendRequest', verify, Controller.sendRequest);
router.get('/allRequests', Controller.getAllRequests);
router.post('/requestFilter', verify, Controller.requestFilter);




module.exports = router;