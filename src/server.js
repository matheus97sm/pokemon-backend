const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const server = express();

mongoose.connect(
  "mongodb+srv://matheus97sm:@Hirotho1@@cluster0-6f7a5.mongodb.net/pokemon?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
