FROM node:8.11.1-alpine

WORKDIR /home/node/app
COPY . .

RUN npm install

CMD npm start
