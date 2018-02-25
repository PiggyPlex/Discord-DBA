// Require Discord.js and Discord-DBA
const Discord = require('discord.js');
const dba = require('discord-dba.js');
// And Finally Create a new Discord Client
const client = new Discord.Client();

const prefix = "!";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(/\s+/g)[0].slice(prefix.length).toLowerCase();
  let args = message.content.split(/\s+/g).slice(1);
  if (command === 'ping') {
    message.channel.send('Pong!');
  };
});

client.login('YOUR TOKEN HERE');
