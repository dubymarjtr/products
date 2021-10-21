import Router from "express";
import config from "./config.js";
import client from "./db/conns/client.js";

const {
  db: { name, collectionName: collection },
} = config;

const router = new Router();

// localhost:3000/api
router.get("/", (_, res) => {
  res.send("Hello from API router");
});

// localhost:3000/products
router.get("/products", async (_, res) => {
  const products = await client.db(name).collection(collection).find({});
  res.json(products);
});

export default router;
