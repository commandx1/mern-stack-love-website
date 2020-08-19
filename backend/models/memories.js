const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memorySchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    kullanici: { type: mongoose.Types.ObjectId, required: true, ref: "User"},
    username: {type: String, required: true},
    imageUrl:{type:String},
    date: {type:String, required: true},
    update: {type:String},
    orderingDate: {type:Date}
});

module.exports = mongoose.model('Memory', memorySchema);