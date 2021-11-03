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

// get product by id (dynamic route)
router.get("/products/:id", async (req, res) => {
  const product = await collection.findOne({ _id: ObjectId(req.params.id) });
  res.json(product);
});

// insert one product
router.post("/products", async (req, res) => {
  const createdProduct = await collection.insertOne(req.body);
  res.json(createdProduct);
});

// delete one product
router.delete("/products", async (req, res) => {
  const deletedProduct = await collection.deleteOne({
    _id: ObjectId(req.body.id),
  });
  res.json(deletedProduct);
});

// update one product
router.put("/products", async (req, res) => {
  const updatedProduct = await collection.updateOne(
    { _id: ObjectId(req.body.id) }, 
    { $set: req.body.payload });
  res.json(updatedProduct);
})






export default router;
