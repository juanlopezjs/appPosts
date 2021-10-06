FROM node:14.18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 
COPY . .
EXPOSE 5000/tcp
CMD [ "npm", "run", "dev"]