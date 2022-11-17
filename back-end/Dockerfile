FROM node:16
WORKDIR /app
COPY ./package.json ./package.json
COPY ./server.js ./server.js
COPY ./api ./api
COPY ./dao ./dao
COPY ./entities ./entities
COPY ./helpers ./helpers
COPY ./index.js ./index.js
COPY ./services ./services

RUN yarn install
RUN npm install
RUN npm install nodemon -g

EXPOSE 8000
CMD ["yarn", "dev"]
