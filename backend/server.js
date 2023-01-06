import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", function (req, res) {
  res.send(data.products); //add the data objec
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`server at http://localhost:${port}`);
});
