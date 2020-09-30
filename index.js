const fs = require('fs');
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const token = config.token;

// FONCTIONS

const helpMessage = "No commands available yet",
      testMessage = "CODE200: Test OK",
      noMessage = "I couldn't understand the command";

const answer = (command) => {
    let result;
    if (command == "help") {
        result = helpMessage;
    } else if (command == "test") {
        result = testMessage;
    } else {
        result = noMessage;
    }
    return result;
}

const commandify = (input) => {
    return input.splice(1).join('');
}

// CLIENT

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
    client.user.setActivity(`in development`);
});

client.on('message', msg => {
    //console.log(msg);
    let input = [...msg.content.toLowerCase()];
    let reply = answer(commandify(input));
    if (input[0] == "/") {
        msg.channel.send(reply);
    }
})

client.login(token);
