const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const aboutHerSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true}
});

module.exports = mongoose.model("AboutHer", aboutHerSchema);
