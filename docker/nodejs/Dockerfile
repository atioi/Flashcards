# syntax=docker/dockerfile:1

FROM node:17-alpine3.15

ENV NODE_ENV=production

WORKDIR /app


COPY package.json ./
COPY package-lock.json* ./


RUN npm install --production

COPY . .

CMD ["node", "index.js"]

