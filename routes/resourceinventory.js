const express = require('express');
const router = express.Router();
const Controller = require('../controllers/resourceinventory');
const {verify} = require('../middlewares/verify');




router.get('/home', verify, Controller.home);
router.post('/sendRequest', verify, Controller.addResource);
router.get('/allRequests', Controller.getAllRequests);
router.post('/requestFilter', verify, Controller.resourceFilter);




module.exports = router;