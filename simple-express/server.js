const mysql = require("mysql2/promise");
const express = require("express");
const cors = require("cors");
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

app.use(cors());

// NOTE GET
app.get("/stocks", async (req, res, next) => {
  let [data, fields] = await pool.execute("SELECT * FROM stocks");
  res.json(data);
});

// app.get("/stocks/:stockId", async (req, res, next) => {
//   console.log("get stocks by id", req.params);
//   let [data, fields] = await pool.execute("SELECT * FROM stocks WHERE id = ?", [
//     req.params.stockId,
//   ]);
//   console.log("query stock by id:", data);
//   res.json(data);
// });

// app.get("/stock_prices/:stockId", async (req, res, next) => {
//   console.log("get stocks price by id", req.params);
//   let [data, fields] = await pool.execute(
//     "SELECT * FROM stock_prices WHERE stock_id = ?",
//     [req.params.stockId]
//   );
//   // console.log("query stock_prices by id:", data);
//   res.json(data);
// });

app.get("/stocks/:stockId", async (request, response, next) => {
  // 取得目前第幾頁
  // 使用 || 取得預設值 undefined || 1 => 1
  let page = request.query.page || 1;
  console.log(request.params.stockId);

  // 計算總筆數
  let [allResult, fileds_allResult] = await pool.execute(
    "SELECT * FROM `stock_prices` WHERE stock_id = ?",
    [request.params.stockId]
  );
  const total = allResult.length;

  const perPage = 5;
  const lastPage = Math.ceil(total / perPage);
  // console.log(lastPage);
  let offset = (page - 1) * perPage;
  // console.log(offset);

  let [data, fileds] = await pool.execute(
    "SELECT * FROM `stock_prices` WHERE stock_id = ? limit ? offset ?",
    [request.params.stockId, perPage, offset]
  );

  response.json({
    pagenation: {},
    stocks: data,
  });

  app.get("/", (req, res) => {
    res.send("hello world!");
  });
});
// NOTE 404
app.use((req, res, next) => {
  console.log("所有路由的後面 ==> 404", req.path);
  res.status(404).send("Not Found");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
