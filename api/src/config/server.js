const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const consign = require('consign');
const cors = require('cors');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

consign().include('./src/controllers').then('./src/infra/dbConfig.js').into(server);

module.exports = server;

