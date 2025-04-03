require('dotenv').config();
const express = require('express');
const Server = require('./model/server');

const svr = new Server();
svr.listen();
