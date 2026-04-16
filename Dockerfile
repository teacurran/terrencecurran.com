###
# Stage 1: Build the Astro application
###
FROM node:22-alpine AS build

# Install build tools for native npm packages (better-sqlite3)
RUN apk add --no-cache python3 make g++

WORKDIR /build

# Copy package files and patches
COPY package.json package-lock.json ./
COPY patches ./patches

# Install dependencies:
# 1. Skip install scripts to avoid canvas native build (needs cairo/pango)
# 2. Rebuild only better-sqlite3 (needed at runtime by emdash)
# 3. Run postinstall for patch-package
RUN npm ci --ignore-scripts && \
    npm rebuild better-sqlite3 && \
    npm run postinstall

# Copy source code
COPY . .

# Build the Astro site (server output)
RUN npm run build

###
# Stage 2: Production runtime
###
FROM node:22-alpine

WORKDIR /app

# Create non-root user
RUN addgroup -S emdash && adduser -S emdash -G emdash

# Copy built application from build stage
COPY --from=build --chown=emdash:emdash /build/dist ./dist
COPY --from=build --chown=emdash:emdash /build/node_modules ./node_modules
COPY --from=build --chown=emdash:emdash /build/package.json ./

# Create sessions directory (Astro hardcodes the build-time path)
RUN mkdir -p /build/node_modules/.astro/sessions && chown -R emdash:emdash /build

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
