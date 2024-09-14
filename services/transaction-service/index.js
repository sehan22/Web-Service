const express = require("express");
const app = express();
const port = process.env.PORT || 3002;

app.get("/transactions", (req, res) => {
  /* res.json([{ id: 1, type: 'buy', amount: 10 }, { id: 2, type: 'sell', amount: 5 }]); */
  res.send("Transaction Service is up and running!");
});

app.listen(port, () => {
  console.log(`Transaction Service running on port ${port}`);
});
