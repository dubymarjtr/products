import Router from "express";
import { ObjectId } from "mongodb";
import config from "./config.js";
import client from "./db/conns/client.js";

const collection = client
  .db(config.db.name)
  .collection(config.db.collectionName);

const router = new Router();

// localhost:3000/api
router.get("/", (_, res) => {
  res.send("Hello from API router");
});

// localhost:3000/products
router.get("/products", async (_, res) => {
  const products = await collection.find().toArray();
  res.json(products);
});

router.get("/products/:id", async (req, res) => {
  const product = await collection.findOne({ _id: ObjectId(req.params.id) });
  res.json(product);
});

export default router;
