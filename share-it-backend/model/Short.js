const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const shortid = require("shortid");

const ShortUrl = new Schema({
  fullurl: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: () => shortid.generate(),
  },
});

module.exports = mongoose.model("Shorturl", ShortUrl);
// model
