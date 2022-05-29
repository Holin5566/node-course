const mysql = require("mysql2/promise");
require("dotenv").config();
const env = process.env;

const pool = mysql
  .createPool({
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    connectionLimit: 10,
  })
  .promise();

// (async () => {
//   const pool = await mysql.createPool({
//     host: env.DB_HOST,
//     port: env.DB_PORT,
//     user: env.DB_USER,
//     password: env.DB_PASSWORD,
//     database: env.DB_NAME,
//     connectionLimit: 10,
//   });
//   let [data, result] = await connection.execute("SELECT * FROM `stocks`");
//   console.log(data);
// })();
