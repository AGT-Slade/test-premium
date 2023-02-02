import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", function (req, res) {
  res.send(data.products); //returns an array/collections of objects
});

app.get("/api/products/slug/:slug", function (req, res) {
  const product = data.products.find(function (x) {
    return x.slug === req.params.slug; //return product object
  });

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

app.get("/api/products/:id", function (req, res) {
  const product = data.products.find(function (x) {
    return x._id === req.params.id; //return product object
  });

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`server at http://localhost:${port}`);
});
