require('dotenv').config();
const mysql = require('mysql2');

const con = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

con.connect(function (err){
    if(err) throw err;
    console.log("connected successfully");
    con.query("CREATE DATABASE IF NOT EXISTS", function (err, result){
         if(err) throw err;
         console.log("Database created successfully");
    });
});

module.exports = con;