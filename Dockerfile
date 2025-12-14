# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Generate sitemap
RUN node -e "const fs = require('fs'); const path = require('path'); const distDir = './dist'; const baseUrl = process.env.BASE_URL || 'https://portfolio.example.com'; const files = []; function walkDir(dir) { const items = fs.readdirSync(dir); items.forEach(item => { const itemPath = path.join(dir, item); const stat = fs.statSync(itemPath); if (stat.isDirectory() && item !== 'img' && item !== 'videos') { walkDir(itemPath); } else if (item.endsWith('.html') && item !== '404.html') { const relativePath = path.relative(distDir, itemPath).replace(/\\\\/g, '/').replace(/index\\.html$/, '').replace(/\\.html$/, ''); files.push(relativePath || 'index'); } }); } walkDir(distDir); const sitemap = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\\n' + files.map(file => \`  <url>\\n    <loc>\${baseUrl}/\${file}</loc>\\n    <lastmod>\${new Date().toISOString().split('T')[0]}</lastmod>\\n  </url>\\n\`).join('') + '</urlset>'; fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);"

# Production stage
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built application from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
