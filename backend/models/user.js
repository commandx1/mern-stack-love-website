const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String },
  memories: [{ type: mongoose.Types.ObjectId, required: true, ref: "Memory" }],
  posts: [{ type: mongoose.Types.ObjectId, required: true, ref: "Blog" }],
  comments: [{type: mongoose.Types.ObjectId, required: true, ref: "Comment"}],
  replies: [{type: mongoose.Types.ObjectId, required: true, ref: "Reply"}],
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
