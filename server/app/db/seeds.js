import once from "./conns/once.js";
import productsData from "./data.js";

once
  .connect()
  .then((connection) =>
    connection.db("products").collection("products").insertMany(productsData)
  )
  .then(() => {
    once.close();
  });
