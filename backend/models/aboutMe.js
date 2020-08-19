const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const aboutMeSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true}
});


module.exports = mongoose.model("AboutMe", aboutMeSchema);
