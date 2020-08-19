const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const poemSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
  update: { type: String, required: true},
  imageUrl: {type: String},
  isActive: {type: Boolean, required: true},
  isDelete: {type: Boolean, required:true}
});

module.exports = mongoose.model("Poem", poemSchema);
