const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  imageUrl: { type: String },
  title: { type: String },
  content: { type: String },
  date: { type: String },
  comments: [
    { type: mongoose.Types.ObjectId, required: true, ref: 'ImageComment' },
  ],
});

module.exports = mongoose.model('ImageFile', imageSchema);