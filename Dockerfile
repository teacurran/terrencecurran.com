###
# Stage 1: Build the Astro application
###
FROM node:20-alpine AS build

WORKDIR /build

# Copy package files for dependency caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the Astro site (server output)
RUN npm run build

###
# Stage 2: Production runtime
###
FROM node:20-alpine

WORKDIR /app

# Create non-root user
RUN addgroup -S emdash && adduser -S emdash -G emdash

# Copy built application from build stage
COPY --from=build --chown=emdash:emdash /build/dist ./dist
COPY --from=build --chown=emdash:emdash /build/node_modules ./node_modules
COPY --from=build --chown=emdash:emdash /build/package.json ./

# Switch to non-root user
USER emdash

# Expose EmDash port
EXPOSE 4321

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=20s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:4321/health || exit 1

# Set host to bind to all interfaces
ENV HOST=0.0.0.0
ENV PORT=4321

# Run the application
ENTRYPOINT ["node", "./dist/server/entry.mjs"]
