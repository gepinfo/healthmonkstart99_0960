FROM node:14.11.0-alpine
COPY . /prescriptionmanager
WORKDIR /prescriptionmanager
RUN npm install
RUN npm i -g ts-node
CMD npm run prod