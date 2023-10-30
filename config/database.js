const Sequelize = require('sequelize');



const db = new Sequelize('thisisadityakumarkasaudhan', 'thisisadityakumarkasaudhan', 'Aditya,3', {
    host: 'localhost',
    dialect: 'postgres'
  });

db.authenticate()
    .then(() => console.log("Connection has been established successfully."))
    .catch(err => console.log("Error "+err));



module.exports = {db};