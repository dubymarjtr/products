// Entry point for the application
import express from "express";
import config from "./config.js";
import router from "./router.js";
import cors from "cors";
// TODO: Import the routes

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});
