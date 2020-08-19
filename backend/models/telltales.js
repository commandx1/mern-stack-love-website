const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const telltaleSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl:{type:String},
});

module.exports = mongoose.model('Telltale', telltaleSchema);