const express = require("express");
const PokemonController = require("./controllers/PokemonController");
const GetAllPokemon = require("./controllers/GetAllPokemon");

const routes = express.Router();

routes.get("/pokemon", GetAllPokemon.index);

routes.get("/pokemon/:id", PokemonController.index);
routes.post("/pokemon", PokemonController.store);
routes.put("/pokemon/:id", PokemonController.update);
routes.delete("/pokemon/:id", PokemonController.delete);

module.exports = routes;
