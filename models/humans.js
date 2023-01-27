const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  name: { type: String, required: true },
  body: { type: String, required: true },
});

const Human = mongoose.model("Human", logSchema);

module.exports = Human;
