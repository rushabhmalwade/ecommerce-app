import express from "express";
import products from "./data/products.js";
import bannerData from "./data/bannerData.js";

import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config(); //config dotenv

//connecting to mongodb databse
import connectDb from "./config/config.js";

connectDb();

const app = express();

app.get("/", (req, res) => {
  res.send(
    `Server running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`
  );
});
app.get("/banner", (req, res) => {
  res.json(bannerData);
});

app.get("/products", (req, res) => {
  res.json(products);
});
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
// app.get("/rishabh", (req, res) => {
//   res.send("<h1>This is made by Rishabh</h1>");
// });
const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`
  );
});
