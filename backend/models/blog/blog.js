const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  imageUrl: { type: String },
  kullanici: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  category: { type: mongoose.Types.ObjectId, required: true, ref: "Category" },
  title: { type: String, required: true },
  content: { type: String, required: true },
  username: { type: String, required: true },
  comments: [{ type: mongoose.Types.ObjectId, required: true, ref: "Comment" }],
  date: { type: String },
  update: { type: String },
  orderingDate: { type: Date },
});

module.exports = mongoose.model("Blog", blogSchema);