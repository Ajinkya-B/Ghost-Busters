FROM node:16
WORKDIR /app
COPY package*.json ./

COPY . .

RUN yarn install
RUN npm install
RUN npm install nodemon -g

EXPOSE 8000
CMD ["yarn", "dev"]
