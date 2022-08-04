const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/budget.data");

transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

transactions.get("/:id", (req, res) => {
  const { id } = req.params;
  if (transactionsArray[id]) {
    res.send(transactionsArray[id]);
  } else {
    res.redirect("*");
  }
});

transactions.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray[transactionsArray.length - 1]);
});

transactions.delete("/:id", (req, res) => {
  const { id } = req.params;
  transactionsArray.splice(id, 1);
  res.send(transactionsArray);
});

transactions.put("/:id", (req, res) => {
  const { id } = req.params;
  const upData = req.body;
  transactionsArray[id] = upData;
  res.send(transactionsArray[id]);
});

module.exports = transactions;
