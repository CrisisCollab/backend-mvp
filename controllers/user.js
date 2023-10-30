const bcrypt = require('bcrypt');
const UserDao = require('../daos/user');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.SECRET_KEY;

module.exports = {
    home: async (req, res) => {
        return res.json({
            status: 200,
            message: 'Home page'
        })
    },
    registerUser: async (req, res) => {
        try {
            const userData = req.body;
            console.log(userData);
            const { password } = userData;

            const hashedPassword = await bcrypt.hash(password, 10);
            userData.password = hashedPassword;

            const newUser = await UserDao.createUser(userData);

            return res.status(201).json({
                status: 201,
                message: 'User registered successfully',
                user: newUser,
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                message: 'Registration failed',
                error: error.message,
            });
        }
    },
    loginUser: async (req, res) => {
        try {
            const { mobile_no, password } = req.body;
            const user = await UserDao.getUser({ mobile_no });
        
            if (user) {
              const passwordMatch = await bcrypt.compare(password, user.password);
        
              if (passwordMatch) {
                // Generate a JWT token with user information
                const token = jwt.sign({ user }, JWT_SECRET, { expiresIn: '7d' });
        
                return res.json({
                  status: 200,
                  message: 'Login successful',
                  user: user,
                  token: token, // Include the JWT token in the response
                });
              } else {
                return res.status(401).json({
                  status: 401,
                  message: 'Incorrect password',
                });
              }
            } else {
              return res.status(404).json({
                status: 404,
                message: 'User not found',
              });
            }
          } catch (error) {
            return res.status(500).json({
              status: 500,
              message: 'Login failed',
              error: error.message,
            });
          }
    }
}