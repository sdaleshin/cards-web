FROM node:15.14.0 AS BASEIMAGE

WORKDIR /src
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:15.14.0

WORKDIR /src
COPY --from=BASEIMAGE /src/build /src/build
COPY --from=BASEIMAGE /src/node_modules /src/node_modules
EXPOSE 3000

CMD ["node", "build/server/cards-server.js"]
