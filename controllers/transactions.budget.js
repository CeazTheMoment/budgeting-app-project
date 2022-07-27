const express = require("express");
const budget = express.Router();
const transactionsArray = require("../models/budget.data");

budget.get("/", (req, res) => {
  res.json(transactionsArray);
});

budget.get("/:id", (req, res) => {
  const { id } = req.params;
  if (transactionsArray[id]) {
    res.send(transactionsArray[id]);
  } else {
    res.redirect("*");
  }
});

budget.post("/", (req, res) => {
  transactionsArray.push(req.body);
  res.json(transactionsArray[transactionsArray.length - 1]);
});

budget.delete("/:id", (req, res) => {
  const { id } = req.params;
  transactionsArray.splice(id, 1);
  res.send(transactionsArray);
});

budget.put("/:id", (req, res) => {
  const { id } = req.params;
  const upData = req.body;
  transactionsArray[id] = upData;
  res.send(transactionsArray[id]);
});

module.exports = budget;
