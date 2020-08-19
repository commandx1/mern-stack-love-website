const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  kullanici: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  content: { type: String, required: true },
  username: { type: String, required: true },
  post: {type: mongoose.Types.ObjectId, required: true, ref: "Blog"},
  reply: [{type: mongoose.Types.ObjectId, required: true, ref: "Reply"}],
  date: { type: String },
  update: { type: String },
  orderingDate: { type: Date },
});

module.exports = mongoose.model("Comment", commentSchema);
