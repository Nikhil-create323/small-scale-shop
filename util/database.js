// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'Nikhil',
//     database: 'nodeman',
//     password: 'Nikhil@2026'
// });

// module.exports = pool.promise();


const Sequalize = require('sequelize');
const sequelize = new Sequalize('nodeman', 'Nikhil', 'Nikhil@2026', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;