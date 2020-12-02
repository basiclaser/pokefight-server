const express = require("express");
const morgan = require("morgan");
const colors = require("colors/safe");
const pokemonRouter = require("./routes/pokemon");

const { PORT = 3000 } = process.env;
const app = express();

app.use(morgan("common"));

app.use("/pokemon", pokemonRouter);

app.listen(PORT, () =>
  console.log(
    colors.green.inverse(` POKEFIGHT server listening on PORT ${PORT} `)
  )
);
