// await version
// 1. read stock no from txt
// 2. axios.get to request data

const axios = require("axios");
const fs = require("fs").promises;
const url = "https://www.twse.com.tw/exchangeReport/STOCK_DAY";

// console.log(getStockData());

async function getStockData() {
  try {
    let stockNo = await fs.readFile("./crawler/stock.txt", "utf-8");
    let res = await axios.get(url, {
      params: {
        // 設定 query string
        response: "json",
        date: "20220301",
        stockNo: stockNo,
      },
    });
    console.log(res.data);
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
}

getStockData();
