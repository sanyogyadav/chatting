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
  // time: { 
  //   type: Date,
  //   default: Date.now 
  // },
  msg_date: {
    type: String,
    default: "",
  },
  msg_time: {
    type: String,
    default: ""
  },
});

const UserMessage = mongoose.model("UserMessage", ChatSchema);

module.exports = UserMessage;