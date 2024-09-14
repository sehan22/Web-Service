const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const port = process.env.PORT || 3000;

app.use("/auth", createProxyMiddleware({ target: "http://auth-service:3001", changeOrigin: true }));
app.use(
  "/transactions",
  createProxyMiddleware({ target: "http://transaction-service:3002", changeOrigin: true })
);
app.use(
  "/monitoring",
  createProxyMiddleware({ target: "http://monitoring-service:3003", changeOrigin: true })
);
app.use(
  "/notify",
  createProxyMiddleware({ target: "http://notification-service:3004", changeOrigin: true })
);

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
});
