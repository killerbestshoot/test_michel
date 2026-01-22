# Michel Cell — Production Deployment

This guide describes how to deploy the React application to production in two ways:
- Docker (recommended) using Nginx to serve the built static files
- Normal host (no Docker) using Nginx or a simple Node static server

## Overview
- Build once, serve static files from the `build/` directory
- Use an HTTP server that supports Single Page Applications (SPA) with a fallback to `index.html` for client-side routing
- Do not run the development server (`react-scripts start`) in production

## Prerequisites
- Node.js 18+ and npm
- For Docker deployments: Docker 24+ (and optionally Docker Compose 2+)
- For normal host: a Linux VM or host with Nginx (or Caddy/Apache), or Node available

## 1) Build the Application
```bash
npm ci
npm run build
```
This creates the optimized production bundle in `build/`.

## 2) Normal Host (No Docker)

### Option A — Nginx (recommended)
1. Install Nginx
2. Copy the build output to a web root (example: `/var/www/michel_cell`)
   ```bash
   sudo mkdir -p /var/www/michel_cell
   sudo cp -r build/* /var/www/michel_cell/
   ```
3. Configure Nginx server block (SPA-friendly)
   ```
   server {
     listen 80;
     server_name your.domain.com;

     root /var/www/michel_cell;
     index index.html;

     # Serve static assets directly
     location / {
       try_files $uri $uri/ /index.html;
     }

     # Optional: Cache headers for static assets
     location ~* \.(js|css|png|jpg|jpeg|gif|svg|webp|ico)$ {
       expires 7d;
       add_header Cache-Control "public, max-age=604800";
     }
   }
   ```
4. Enable the site, test config, and reload Nginx
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```
5. Add HTTPS via a reverse proxy or cert tooling (e.g., certbot) as needed.

### Option B — Node static server (quick setup)
1. Install a static file server
   ```bash
   npm i -g serve
   ```
2. Run it
   ```bash
   serve -s build -l 3000
   ```
3. Put a reverse proxy (Nginx/Caddy) in front for HTTPS and caching in production environments.

## 3) Docker Deployment

### Dockerfile (Nginx)
Create a `Dockerfile` at the project root:
```Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.25-alpine
COPY --from=build /app/build /usr/share/nginx/html
# SPA fallback
RUN sed -i 's|try_files.*;|try_files $uri $uri/ /index.html;|g' /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build and Run
```bash
docker build -t michelcell-web .
docker run -d -p 8080:80 --name michelcell michelcell-web
```
Open http://localhost:8080/ (or your server IP).

### Optional: Docker Compose
```yaml
services:
  web:
    image: michelcell-web:latest
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```
```bash
docker compose up -d --build
```

## Environment Notes
- SPA fallback is critical: make sure unknown routes resolve to `index.html`
- If deploying under a subpath (e.g., `/app/`), set `homepage` in `package.json` or set `PUBLIC_URL` during build:
  ```bash
  PUBLIC_URL=/app npm run build
  ```

## Maintenance
- Update:
  ```bash
  git pull
  npm ci
  npm run build
  # For Nginx host: copy new build to web root, reload Nginx
  # For Docker: docker build ... && docker run (or compose up --build)
  ```
- Logs:
  - Nginx: `/var/log/nginx/access.log` and `error.log`
  - Docker: `docker logs michelcell`

## Troubleshooting
- Blank page or 404 on refresh:
  - Ensure `try_files $uri $uri/ /index.html;` is present in Nginx
  - Confirm the app is built to the correct base path (`PUBLIC_URL`)
- Stale assets after updates:
  - Clear CDN/Reverse proxy cache or bump filenames (CRA already fingerprints assets)
- Dev server in production:
  - Avoid `react-scripts start` in production; serve the `build/` folder via Nginx or a static server

