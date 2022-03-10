const { pool } = require("./db");

function makeFakeWalletAddress() {
  var result           = '0x';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 40; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

function makeFakeMessage() {
  var result           = '0x';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  var charactersLength = characters.length;
  for ( var i = 0; i < 100; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

async function insertData() {
  const from_addr = makeFakeWalletAddress();
  const to_addr = makeFakeWalletAddress();
  const msg = makeFakeMessage();
  try {
    const res = await pool.query(
      "INSERT INTO messages (from_addr, to_addr, message) VALUES ($1, $2, $3)",
      [from_addr, to_addr, msg]
    );
    console.log(`Added a message from ${from_addr} to ${to_addr} saying ${msg}`);
  } catch (error) {
    console.error(error)
  }
}

insertData()