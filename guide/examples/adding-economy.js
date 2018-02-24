// Require Discord.js and Discord-DBA
const Discord = require('discord.js');
const dba = require('./discord-dba.js');
// And Finally Create a new Discord Client
const client = new Discord.Client();
const workRecently = new Set();
const robRecently = new Set();

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
  if (command === 'work') {
    if (workRecently.has(message.author.id)) return message.reply('You must wait the 30s Cooldown!');
    dba.updateBal(message.author.id, 100).then((i) => {
      message.channel.send(`**Some Hard work has earned you $100!**\n**New Balance:** ${i.money}`);
    });
    // Adds the user to the set so that they can't work for another 30s
    workRecently.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after 30s seconds
      workRecently.delete(message.author.id);
    }, 30*1000);
 };
  if (command === 'rob') {
    if (robRecently.has(message.author.id)) return message.reply('You must wait the 1m Cooldown!');
    if (!message.mentions.members.first()) return message.reply('You must mention a user to rob!');
    const member = message.mentions.members.first();
    if (random(1,2)==1) {
      dba.updateBal(message.author.id, 100).then((i) => {
        message.channel.send(`**You Robbed $100 from ${member.user.tag}!**\n**New Balance:** ${i.money}`);
      });
      dba.updateBal(member.id, -100);
    } else {
      dba.updateBal(message.author.id, -20).then((i) => {
        message.channel.send(`**You were caught trying to rob $100 from ${member.user.tag}! You have been fined $20!**\n**New Balance:** ${i.money}`);
      });
    };
    // Adds the user to the set so that they can't rob for another 1m
    robRecently.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after 1m seconds
      robRecently.delete(message.author.id);
    }, 1*60*1000);
  };
});

function random(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
};

client.login('YOUR TOKEN HERE');
