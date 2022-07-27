const express = require("express");
const app = express();
const transactionsController = require("./controllers/transactions.budget");
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use("/transactions", transactionsController);

app.get("/", (req, res) => {
  res.send("Welcome to my budget app!!!");
});

app.use((req, res, next) => {
  next();
});

app.use("*", (req, res) => {
  res.status(404).send("Page Error");
});

module.exports = app;
