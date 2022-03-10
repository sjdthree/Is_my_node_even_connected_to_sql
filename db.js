require ('dotenv').config();
const { Pool } = require("pg");
const fs = require('fs');

const pool = new Pool({
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  host: process.env.HOST,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync('ca-certificate.crt').toString(), // make sure to drag the ca file into the same parent folder as this script
  }
});



module.exports = { pool };




