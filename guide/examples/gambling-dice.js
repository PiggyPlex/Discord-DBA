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
  if (command === "roll" || command === "dice") {
    if (args.legnth<2) return message.reply('Incorrect Command Usage!');
    if (isNaN(args[0]) || isNaN(args[1]) || args[0]<1 || args[0]>6) return message.reply('Please specify a valid number! For the bet, please use a number without a `$` in front of it. For Dice throws, please pick a number between 1 and 6!');
    if (random(1,6)==parseInt(args[0])) {
      dba.updateBal(message.author.id, parseInt(args[1])).then((i) => {
        message.channel.send(`**You guessed the correct number! You win $${args[0]}!**\n**New Balance:** $${i.money}`);
      });
    } else {
      dba.updateBal(message.author.id, 0-parseInt(args[1])).then((i) => {
        message.channel.send(`**You guessed the wrong number! You lose $${args[0]}!**\n**New Balance:** $${i.money}`);
      });
    };
  };
});

function random(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
};

client.login('YOUR TOKEN HERE');
