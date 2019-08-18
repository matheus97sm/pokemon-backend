const axios = require("axios");
const Pokemons = require("../models/Pokemon");

module.exports = {
  async index(req, res) {
    const pokemons = await Pokemons.find();

    return res.json(pokemons);
  }
};
