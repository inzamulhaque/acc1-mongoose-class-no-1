const express = require("express");
const app = express();
const cors = require("cors");
const Product = require("./models/Product");
const {
  getProducts,
  createProduct,
} = require("./controllers/product.controller");
const productRouter = require("./routes/v1/product.routr");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use("/api/v1/product", productRouter);

module.exports = app;
