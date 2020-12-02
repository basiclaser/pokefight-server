const fs = require("fs");
const rawdb = fs.readFileSync("./model/fakePokemonDatabase.json");
const db = JSON.parse(rawdb);

exports.getAllPokemon = function (req, res) {
  res.json(db);
};

exports.getOnePokemon = function (req, res) {
  const { id } = req.params;
  const single = db.find((p) => Number(p.id) === Number(id));
  if (!single) {
    return res.status(404).send("Pokemon with this ID does not exist");
  }
  res.json(single);
};

exports.getOnePokemonInfo = function (req, res) {
  const { id, info } = req.params;
  const acceptableFields = new Set(["name", "base", "type"]);
  const single = db.find((p) => Number(p.id) === Number(id));
  if (!single) {
    return res.status(404).send("Pokemon with this ID does not exist");
  }
  if (!acceptableFields.has(info)) {
    return res.status(400).send("You can't request this info type");
  }

  res.json(single[info]);
};

//   // example of dynamic property keys
//   const pokemon = {
//     id: 2,
//     name: {
//       english: "Ivysaur",
//       japanese: "フシギソウ",
//       chinese: "妙蛙草",
//       french: "Herbizarre",
//     },
//     type: ["Grass", "Poison"],
//     base: {
//       HP: 60,
//       Attack: 62,
//       Defense: 63,
//       "Sp. Attack": 80,
//       "Sp. Defense": 80,
//       Speed: 60,
//     },
//   };
//   const dynamicKey = "base";
//   console.log(pokemon[dynamicKey]);
//   console.log(pokemon.base);
