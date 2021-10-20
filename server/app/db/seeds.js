import once from "./conns/once.js";
import productsData from "./data.js";

(async () => {
  const conn = await once.connect();
  await conn.db("products").collection("products").deleteMany({});
  await conn.db("products").collection("products").insertMany(productsData);
  conn.close();
})();
