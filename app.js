require ('dotenv').config();
const { Pool, Client } = require('pg')

const PORT = process.env.PORT || 5001;

//Uncomment below if you want to see all your environment variables
// console.log(process.env);



// TWO methods to define a db connection, URL or individual

// *** ONE ***

// const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
// SAMPLE env setting:  DATABASE_URL = 'postgres://user:password@localhost:5432/dbname'

const connectionString = process.env.DATABASE_URL;

console.log('here is the db URL');
console.log(connectionString);

// UNCOMMENT this and COMMENT TWO to use this version
const pool = new Pool({
  connectionString,
})



// *** TWO ***

// const pool = new Pool({
//   user: 'user',
//   host: 'localhost',
//   database: 'messages',
//   password: 'password',
//   port: 5432,
// })


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


// fun dump of a lot of info:
//console.log('pool: ', pool)