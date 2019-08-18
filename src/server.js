const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const server = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.listen(process.env.PORT || 3000);
