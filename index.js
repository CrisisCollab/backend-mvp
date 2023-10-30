const express = require('express');
const server = express();
const router = express.Router();
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const PORT = process.env.PORT || '8000';



const db = require('./config/database');
const userRoute = require('./routes/user');
const agencyRoute = require('./routes/agency');
const alertRoute = require('./routes/alert');
const resourceRoute = require('./routes/resourceinventory');

server.use(bodyParser.json());

server.use('/api/user', userRoute);
server.use('/api/agency', agencyRoute);
server.use('/api/alert', alertRoute);
server.use('/api/resource', resourceRoute);

server.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});