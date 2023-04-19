FROM node:16.13.1-alpine3.14 as nodeV
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm run build

FROM node:16.13.1-alpine3.14
WORKDIR /app
COPY --from=nodeV /app ./
EXPOSE ${PORT}
CMD ["npm", "run", "start:prod"]
