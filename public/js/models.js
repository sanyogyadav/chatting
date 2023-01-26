const mongoose = require("mongoose");
// const moment = require('moment');

const ChatSchema = new mongoose.Schema({
  user_name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: "",
  },
  // time: moment().format('hh:mm a')
});

const UserMessage = mongoose.model("UserMessage", ChatSchema);

module.exports = UserMessage;