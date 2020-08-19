const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const replySchema = new Schema({
  kullanici: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  content: { type: String, required: true },
  username: { type: String, required: true },
  comment: {type: mongoose.Types.ObjectId, required: true, ref: "Comment"},
  date: { type: String },
  update: { type: String },
  orderingDate: { type: Date },
});

module.exports = mongoose.model("Reply", replySchema);
