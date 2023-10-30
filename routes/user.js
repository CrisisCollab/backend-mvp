const express = require('express');
const router = express.Router();
const Controller = require('../controllers/user');



router.get('/home', Controller.home);
router.post('/register', Controller.registerUser);
router.post('/login', Controller.loginUser);





module.exports = router;