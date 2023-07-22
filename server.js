const express= require('express');
const routes = require('./routes')
const sequilize = require('.config/connection.js');
const app = express();
const PORT = process.env.PORT||3001

