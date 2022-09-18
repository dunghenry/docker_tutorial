FROM node:16-alpine

WORKDIR /app

RUN chown node:node /app

USER node

COPY --chown=node:node . .

# COPY . .

RUN npm i --production

CMD [ "npm", "start" ]