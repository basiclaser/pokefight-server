require("dotenv").config();
const mongoose = require("mongoose");
const Pokemon = require("./pokemon");

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

exports.Pokemon = Pokemon;
exports.connectDb = connectDb;
