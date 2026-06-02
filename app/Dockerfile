FROM node:22-alpine 
WORKDIR /app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY package*.json ./
RUN npm ci
COPY --chown=appuser:appgroup . .
EXPOSE  3000
USER appuser
CMD ["node","server.js"]
