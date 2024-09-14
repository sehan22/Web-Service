const express = require("express");
const app = express();
const port = process.env.PORT || 3004;

app.post("/notify", (req, res) => {
  const { message } = req.body;
  console.log(`Notification sent: ${message}`);
  res.status(200).json({ message: "Notification sent successfully" });
});

app.listen(port, () => {
  console.log(`Notifications Service running on port ${port}`);
});
