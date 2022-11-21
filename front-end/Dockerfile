FROM node:16

WORKDIR /app

COPY package*.json ./
COPY . .

RUN yarn install

EXPOSE 3000

CMD ["yarn","start"]