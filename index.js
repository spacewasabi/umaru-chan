const fs = require('fs');
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const token = config.token;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
    client.user.setActivity(`in development`);
});

client.login(token);
