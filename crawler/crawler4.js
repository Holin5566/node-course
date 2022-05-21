const mysql = require("mysql2/promise");
require("dotenv").config();

const env = process.env;

(async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "user",
    password: env.PASSWORD,
    database: "stock",
  });
  let [data, result] = await connection.execute("SELECT * FROM `stocks`");
  console.log(data);
})();
