const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const port = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
