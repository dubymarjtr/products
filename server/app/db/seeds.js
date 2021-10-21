import config from "../config.js";
import once from "./conns/once.js";
import productsData from "./data.js";

const {
  db: { name, collectionName: collection },
} = config;

(async () => {
  const conn = await once.connect();
  await conn.db(name).collection(collection).deleteMany({});
  await conn.db(name).collection(collection).insertMany(productsData);
  conn.close();
})();
