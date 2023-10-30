const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.SECRET_KEY;
const User_Type = require('../enums/userType');

function verify(req, res, next) {
    try {
      let token = null;
      if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        token = req.headers.authorization.split(' ');
      }
      if (token) {
        jwt.verify(token[1], JWT_SECRET, async (err, payload) => {
          if (err) {
            if (err.name == 'TokenExpiredError') {
              return res.status(401).send({ status: 401, message: 'Token expired', data: {} });
            }
            return res.status(500).json({
                status: 500,
                message: 'Registration failed',
                error: error.message,
            });
          }
          if (payload && payload.user) {
              req.user = payload.user;
              next();
          } else {
            return res.status(401).send({ status: 401, message: 'Invalid token', data: {} });
          }
        });
      } else {
        return res.status(401).send({ status: 401, message: 'Invalid token', data: {} });
      }
    } catch (error) {
      next(error);
    }
}


function verifyAdmin(req, res, next) {
    try {
      let token = null;
      if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        token = req.headers.authorization.split(' ');
      }
      if (token) {
        jwt.verify(token[1], JWT_SECRET, async (err, payload) => {
          if (err) {
            if (err.name == 'TokenExpiredError') {
              return res.status(401).send({ status: 401, message: 'Token expired', data: {} });
            }
            return res.status(500).json({
                status: 500,
                message: 'Registration failed',
                error: error.message,
            });
          }
          if (payload && payload.user && payload.user.userType === User_Type.ADMIN) {
              req.user = payload.user;
              next();
          } else {
            return res.status(401).send({ status: 401, message: 'Invalid token', data: {} });
          }
        });
      } else {
        return res.status(401).send({ status: 401, message: 'Invalid token', data: {} });
      }
    } catch (error) {
      next(error);
    }
}




module.exports = {verify, verifyAdmin};