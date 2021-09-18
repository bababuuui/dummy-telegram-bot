
import  TelegramBot from "node-telegram-bot-api";

import  config from "./config/default.json"
import {OpenWeatherAPIHandler} from "./api/OpenWeatherAPIHandler";
const TOKEN = config.token;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TOKEN, {polling: true});


bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log ( `recieved ${msg.text} from ${msg.from?.id}`)
    bot.sendMessage(chatId, `Your message is "${msg.text}"`);
});


bot.onText(/\/echo (.+)/, (msg, match) => {
    let resp = match?.[1];
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, <string>resp);
});


bot.onText(/\/weather (.+)/, (msg, match) => {
    let city = match?.[1];
    const chatId = msg.chat.id;
    OpenWeatherAPIHandler.getCurrentWeatherForCity(<string>city).then(
        data=> {
            bot.sendMessage(chatId, JSON.stringify(data));
        }
    ).catch( error => {
        bot.sendMessage(chatId, `Can not find such city - ${city}`);
    })

});