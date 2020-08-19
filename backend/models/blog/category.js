const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  title: { type: String, required: true },
  label: {type:String, required:true},
  posts: [{type: mongoose.Types.ObjectId, required: true, ref: "Blog"}],
});

module.exports = mongoose.model("Category", categorySchema);
