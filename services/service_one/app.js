const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Service One is up and running!");
});

app.get(port, () => {
  console.log(`Service One listening on port ${port}`);
});
