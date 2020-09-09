const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  content: { type: String, required: true },
  userId: {type: String, required: true},
  username: { type: String, required: true },
  date: { type: String, required: true },
  read: { type: Boolean, required: true },
  redirect: {type: String, required: true}
});

module.exports = mongoose.model('MyNotification', notificationSchema);
