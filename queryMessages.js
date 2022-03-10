const { pool } = require("./db");

pool.query("SELECT * from messages", (err, res) => {
    console.log(err, res);
    pool.end();
});