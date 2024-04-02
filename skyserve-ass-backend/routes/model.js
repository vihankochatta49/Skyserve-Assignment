const mongoose = require("mongoose");

//schema for JSON
const schema = new mongoose.Schema({
    data: Object,
  });

module.exports = new mongoose.model("JsonData",schema);