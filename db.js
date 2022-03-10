require ('dotenv').config();
const { Pool } = require("pg");

const pool = new Pool({
  user: 'hashchatViewer',
  database: 'hashchat',
  password: 'Hzm8vlS9ZMKIeiVw',
  port: 25060,
  host: 'hashchat-do-user-9645939-0.b.db.ondigitalocean.com',
  ssl: {
    rejectUnauthorized: false,
  }
});



module.exports = { pool };




