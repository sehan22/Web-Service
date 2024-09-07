const express = require("express");
const app = express();
const port = process.env.PORT || 3003;

app.get("/monitor", (req, res) => {
  /* res.json([
    { service: "auth", status: "healthy" },
    { service: "transaction", status: "healthy" },
  ]); */
  res.send("Monitoring Service is up and running!");
});

app.listen(port, () => {
  console.log(`Monitoring Service running on port ${port}`);
});
