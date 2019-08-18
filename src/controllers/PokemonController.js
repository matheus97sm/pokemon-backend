const Pokemon = require("../models/Pokemon");

module.exports = {
  async index(req, res) {
    const { id } = req.params;
    const poke = await Pokemon.findById(id);

    if (!poke) {
      return res.status(400).json({ error: "Pokémon não existe" });
    }

    res.json(poke);
  },

  async store(req, res) {
    const { number, name, type, generation, image } = req.body;

    const pokemonExists = await Pokemon.findOne({ number });

    if (pokemonExists) {
      return res.json(pokemonExists);
    }

    const poke = await Pokemon.create({
      number,
      name,
      type,
      generation,
      image
    });

    return res.json(poke);
  },

  async update(req, res) {
    const { id } = req.params;

    const poke = await Pokemon.findById(id);

    if (!poke) {
      return res.status(400).json({ error: "Pokémon não existe" });
    }

    const { number, name, type, generation, image } = req.body;

    poke.number = number ? number : poke.number;
    poke.name = name ? name : poke.name;
    poke.type = type ? type : poke.type;
    poke.generation = generation ? generation : poke.generation;
    poke.image = image ? image : poke.image;

    await poke.save();

    res.json(poke);
  },

  async delete(req, res) {
    const { id } = req.params;

    const poke = await Pokemon.findById(id);

    if (!poke) {
      return res.status(400).json({ error: "Pokémon não existe" });
    }

    poke.delete();

    res.json(poke);
  }
};
