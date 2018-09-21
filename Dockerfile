FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD npm test
CMD npm run build
CMD npm start
EXPOSE 3000