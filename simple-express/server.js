const mysql = require("mysql2/promise");
const express = require("express");
const port = 8080;
const app = express();
require("dotenv").config();
const env = process.env;

const connection = mysql.createConnection({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
});
console.log("connect to MySQL");

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
