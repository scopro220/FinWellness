const Transaction = require("../models/Transaction");

module.exports = (app) => {
  app.get("/api/transactions", async (req, res) => {
    await Transaction.find({ id: req.user.id })
      .then((response) => res.send(response))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });

  app.post("/api/transactions/add", async (req, res) => {
    const newTransaction = new Transaction({
      id: req.body.id,
      transactionType: req.body.transactionType,
      category: req.body.category,
      amount: req.body.amount,
      date: req.body.date,
    });

    await newTransaction
      .save()
      .then(() => res.json("Transaction added"))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });

  app.delete("/api/transaction/:id", async (req, res) => {
    await Transaction.findByIdAndDelete(req.params.id)
      .then(() => res.json("Transaction deleted"))
      .catch((err) => res.status(400).json(`Error: ${err}`));
  });
};
