const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

var connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});



connection.connect();

connection.query('SELECT * FROM tutorials', function(err, rows, fields)
{
    if (err) throw err;

    console.log(rows[0]);
});
