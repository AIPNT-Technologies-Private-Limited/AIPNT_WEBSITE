# Node.js Alpine base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package manifest files
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production

# Copy remaining backend application code
COPY . .

# Expose backend default port
EXPOSE 5000

# Set environment defaults
ENV PORT=5000
ENV NODE_ENV=production

# Command to run backend server
CMD ["node", "src/index.js"]
