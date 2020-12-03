const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
  {
    name: {
      english: String,
      japanese: String,
      chinese: String,
      french: String,
    },
    types: {
      type: [String],
      required: true,
    },
    base: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const Pokemon = mongoose.model("Pokemon", pokemonSchema);
module.exports = Pokemon;
