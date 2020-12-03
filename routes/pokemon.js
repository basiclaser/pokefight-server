var express = require("express");
var router = express.Router();
const {
  getAllPokemon,
  getOnePokemon,
  getOnePokemonInfo,
} = require("../controllers/pokemon");

router.get("/", getAllPokemon); // /pokemon/
router.get("/:id", getOnePokemon); // /pokemon/2
router.get("/:id/:info", getOnePokemonInfo); // /pokemon/2/base

module.exports = router;
