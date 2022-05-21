const mysql = require("mysql2/promise");
require("dotenv").config();
const env = process.env;

(async () => {
  const connection = await mysql.createConnection({
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  });
  let [data, result] = await connection.execute("SELECT * FROM `stocks`");
  console.log(data);
})();
