# Coinbase Crypto Exchange Service Runbook

This runbook outlines the steps for deploying and testing the Coinbase crypto exchange service.

## Prerequisites

- A Kubernetes cluster is set up and accessible.
- kubectl is configured with access to the cluster.

## Deployment Steps

**1. Build the Docker Image:**

```bash
cd project_name
docker build -t coinbase-service:latest .
```
