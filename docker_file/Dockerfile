FROM node:16-alpine

#CREATE AND CMD app
WORKDIR /app

COPY . .

# COPY package*.json ./src

RUN npm install

CMD [ "npm", "start" ]