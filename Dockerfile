# ---------------------------
# 1. Build Stage
# ---------------------------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm ci --only=production --ignore-scripts && npm install --only=dev

# Copy the rest of the application
COPY . .

# Build the Next.js app
RUN npm run build

# ---------------------------
# 2. Production Stage
# ---------------------------
FROM node:20-alpine AS runner

WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

# Expose port
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "start"]
