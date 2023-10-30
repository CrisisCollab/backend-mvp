const express = require('express');
const router = express.Router();
const Controller = require('../controllers/agency');
const {verify} = require('../middlewares/verify');



router.get('/home', verify, Controller.home);
router.post('/register', verify, Controller.createAgency);
router.get('/allAgency', Controller.getAllAgency);
router.post('/nearbyAgency', verify, Controller.nearbyAgency);





module.exports = router;