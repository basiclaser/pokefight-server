const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
  {
    name: {
      english: String,
      japanese: String,
      chinese: String,
      french: String,
    },
    type: {
      type: [String],
    },
    base: {
      HP: Number,
      Attack: Number,
      Defense: Number,
      "Sp. Attack": Number,
      "Sp. Defense": Number,
      Speed: Number,
    },
  },
  { timestamps: true }
);

const Pokemon = mongoose.model("Pokemon", pokemonSchema);
module.exports = Pokemon;
