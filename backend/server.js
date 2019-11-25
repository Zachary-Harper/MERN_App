const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const getSecret = require("./secret");


const API_PORT = 3001;
const app = express();
const router = express.Router();

mongoose.connect();
