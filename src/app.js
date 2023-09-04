require('dotenv').config();

const express = require('express');

const configExpress = require('./config/express');
const routes = require('./routes');

const app = express();

// settings server
configExpress(app);
routes(app);

module.exports = app;
