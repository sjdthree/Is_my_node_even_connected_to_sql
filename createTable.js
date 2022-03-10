const { pool } = require("./db");

async function createTable() {
    try {
      const res = await pool.query("CREATE TABLE messages(message_id serial PRIMARY KEY, from_addr VARCHAR(42) NOT NULL, to_addr VARCHAR(42) NOT NULL, date_sent TIMESTAMPTZ NOT NULL DEFAULT NOW(), message TEXT NOT NULL)");
      console.log(`Added messages Table`);
    } catch (error) {
      console.error(error)
    }
  }
  
  createTable()