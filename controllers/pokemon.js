const fs = require("fs");
const rawdb = fs.readFileSync("./models/fakePokemonDatabase.json");
const db = JSON.parse(rawdb);
const { Pokemon } = require("../models");

exports.getAllPokemon = async function (req, res) {
  const all = await Pokemon.find().limit(10);
  res.json(all);
};

exports.getOnePokemon = async function (req, res) {
  const { id } = req.params;

  const single = await Pokemon.findOne({ id: Number(id) });

  if (!single) {
    return res.status(404).send("Pokemon with this ID does not exist");
  }
  res.json(single);
};

exports.getOnePokemonInfo = async function (req, res) {
  const { id, info } = req.params;
  const acceptableFields = new Set(["name", "base", "type"]);
  const single = await Pokemon.findOne({ id: Number(id) });
  if (!single) {
    return res.status(404).send("Pokemon with this ID does not exist");
  }
  if (!acceptableFields.has(info)) {
    return res.status(400).send("You can't request this info type");
  }

  res.json(single[info]);
};
