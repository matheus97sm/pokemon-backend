const { Schema, model } = require("mongoose");

const PokemonSchema = new Schema(
  {
    number: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    generation: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Pokemon", PokemonSchema);
