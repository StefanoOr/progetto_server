const mysql = require("mysql2/promise");
const bluebird = require('bluebird');
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    Promise: bluebird
});




module.exports = connection;
