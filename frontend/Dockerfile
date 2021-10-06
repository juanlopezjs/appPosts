FROM node:14.18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3000/tcp
CMD [ "npm", "start"]