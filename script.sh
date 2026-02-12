#!/bin/bash
echo "Redeploying application..."
docker-compose down
docker-compose build --no-cache
docker-compose up -d
echo "Deployment complete. App running on port 3033."
echo "Logs are available in ./build/logs"
