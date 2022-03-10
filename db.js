require ('dotenv').config();
const { Pool } = require("pg");
const fs = require('fs');

console.log(process.env);

const pool = new Pool({
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  host: process.env.HOST,
  ssl: {
    rejectUnauthorized: false,
    // ca: fs.readFileSync('ca-certificate.crt').toString(), // make sure to drag the ca file into the same parent folder as this script
  }
});

pool.query('SELECT NOW()', (err, res) => {
  try {
    console.log('results from query: ', res.rows[0]);
    if (res.rows !== null) {
      console.log('It appears you are connected and can query for now() in your postgres! congrats!');
    }
  }
  catch {
    console.log('OOOPS.  Looks like something isn\'t working');
    console.log(err, res);
    throw err
  }
  //pool.end()
})



module.exports = { pool };




