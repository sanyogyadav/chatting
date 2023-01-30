const moment = require('moment');
const chatMessage = require('../public/js/models');

function formatMessage(username, text) {

    let current_date = new Date().toLocaleDateString()
    //console.log(current_date)

    let current_time = new Date().toLocaleTimeString()
    // let date = new Date();
    // let current_time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    //console.log(current_time)

    const chat = new chatMessage({user_name: username, text: text, msg_date: current_date, msg_time: current_time})
    chat.save()
    return {
        username,
        text,
        time: moment().format('h:mm a')
    }
}

module.exports = formatMessage;