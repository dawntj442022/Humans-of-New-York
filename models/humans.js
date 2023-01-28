const mongoose = require("mongoose");

const humanSchema = new mongoose.Schema({
  title: { type: String, required: true },
  entry: { type: String, required: true },
  postToPublic: { type: Boolean, default: true },
});

const Human = mongoose.model("Human", humanSchema);

module.exports = Human;
