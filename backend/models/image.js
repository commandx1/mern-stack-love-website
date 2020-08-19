const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    imageUrl: {type: String},
    title:{type:String},
    content: {type: String},
    date: {type: String},
    active: {type: Boolean},
    activeStyle: {type: Object}
});


module.exports = mongoose.model('ImageFile', imageSchema);
