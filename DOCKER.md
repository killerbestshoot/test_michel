# Docker Setup for Michel Cell

## Files Created
- `Dockerfile` - Production build (multi-stage, optimized)
- `Dockerfile.dev` - Development build with hot-reload
- `docker-compose.yml` - Orchestration for both environments
- `.dockerignore` - Excludes unnecessary files from Docker context

## Quick Start

### Production Build & Run
```bash
# Build the image
docker build -t michell_cell:latest .

# Run the container
docker run -p 3000:3000 michell_cell:latest
```

### Using Docker Compose (Production)
```bash
# Build and start
docker-compose up --build

# Start in background
docker-compose up -d --build

# Stop
docker-compose down
```

### Development with Hot-Reload
```bash
# Start development container (uses profile 'dev')
docker-compose --profile dev up --build

# Access at http://localhost:3001
```

## Docker Images & Registries

### Build for Multiple Registries
```bash
# For Docker Hub
docker build -t yourusername/michell_cell:latest .
docker push yourusername/michell_cell:latest

# For GitHub Container Registry (GHCR)
docker build -t ghcr.io/yourusername/michell_cell:latest .
docker push ghcr.io/yourusername/michell_cell:latest

# For AWS ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789.dkr.ecr.us-east-1.amazonaws.com
docker build -t 123456789.dkr.ecr.us-east-1.amazonaws.com/michell_cell:latest .
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/michell_cell:latest
```

## Environment Variables
```bash
# .env file (not committed to git)
NODE_ENV=production
```

## Health Check
The container includes a health check that verifies the app is running on port 3000.

Check status:
```bash
docker ps  # Look for 'healthy', 'unhealthy', or 'starting'
```

## Useful Commands

```bash
# View logs
docker logs michell_cell_app

# Execute command in container
docker exec -it michell_cell_app sh

# Inspect image
docker inspect michell_cell:latest

# Remove dangling images
docker image prune

# Remove all stopped containers
docker container prune
```

## Performance Notes
- **Multi-stage build**: Reduces final image size by ~70%
- **Alpine base**: Lightweight (136 MB vs 900+ MB with debian)
- **Health check**: Monitors app availability
- **Volume mounts (dev)**: Enable hot-reload during development

## Deployment

### Kubernetes
```bash
kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: michell-cell
spec:
  replicas: 3
  selector:
    matchLabels:
      app: michell-cell
  template:
    metadata:
      labels:
        app: michell-cell
    spec:
      containers:
      - name: michell-cell
        image: michell_cell:latest
        ports:
        - containerPort: 3000
        livenessProbe:
          httpGet:
            path: /
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
EOF
```

### Docker Swarm
```bash
docker stack deploy -c docker-compose.yml michell_cell
```

## Troubleshooting

**Container exits immediately:**
```bash
docker logs michell_cell_app  # Check error logs
```

**Port already in use:**
```bash
docker run -p 8000:3000 michell_cell:latest  # Map to different port
```

**Need to rebuild:**
```bash
docker-compose up --build --force-recreate
```
