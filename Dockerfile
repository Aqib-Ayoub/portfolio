# ---- Stage 1: Build ----
FROM node:20-alpine AS build

WORKDIR /app

# Install deps first (separate layer so it's cached unless package*.json changes)
COPY package*.json ./
RUN npm ci

# Copy the rest of the source and build
COPY . .
RUN npm run build

# ---- Stage 2: Serve ----
FROM nginx:1.27-alpine AS serve

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy only the built output from Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Custom nginx config (handles React Router-style refresh on any route)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3080

CMD ["nginx", "-g", "daemon off;"]