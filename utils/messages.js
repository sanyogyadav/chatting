const moment = require('moment');
const chatMessage = require('../public/js/models');

function formatMessage(username, text) {
    const chat = new chatMessage({user_name: username, text: text, time: moment().format('h:mm a')})
    chat.save()
    return {
        username,
        text,
        time: moment().format('h:mm a')
    }
}

module.exports = formatMessage;