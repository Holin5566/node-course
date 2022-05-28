const mysql = require("mysql2/promise");
const express = require("express");
const port = 8001;
const app = express();
require("dotenv").config();
const env = process.env;

const dbConfig = {
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  connectionLimit: 10,
};

const pool = mysql.createPool(dbConfig);

// NOTE GET
app.get("/stocks", async (req, res, next) => {
  let [data, fields] = await pool.execute("SELECT * FROM stocks");
  res.json(data);
});

app.get("/stocks/:stockId", async (req, res, next) => {
  console.log("get stocks by id", req.params);
  let [data, fields] = await pool.execute(
    "SELECT * FROM stocks WHERE id = " + req.params.stockId
  );
  console.log("query stock by id:", data);
  res.json(data);
});

app.get("/", (req, res) => {
  res.send("hello world!");
});

// NOTE 404
app.use((req, res, next) => {
  console.log("所有路由的後面 ==> 404", req.path);
  res.status(404).send("Not Found");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
