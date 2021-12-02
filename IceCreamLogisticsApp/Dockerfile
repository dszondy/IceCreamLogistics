FROM node:14.16.0-alpine3.13 as build-stage

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run test-server
EXPOSE 4200
ENTRYPOINT [ "nginx","-g","daemon off;" ]
