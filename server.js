var TelegramBot = require('node-telegram-bot-api');

var token = '321569332:AAELDqZAWjX2oUBm4sDtF2ik2d7xOTgjGFA';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var resp = match[1];
  bot.sendMessage(fromId, resp);
});

// Any kind of message
bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'cat.png';
  bot.sendPhoto(chatId, photo, {caption: 'Lovely kittens'});
});