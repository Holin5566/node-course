const mysql = require("mysql2/promise");

(async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "user",
    password: "user123",
    database: "stock",
  });
  let [data, result] = await connection.execute("SELECT * FROM `stocks`");
  console.log(data);
})();
