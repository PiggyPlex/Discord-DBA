### dba#updateBal
Method of [dba](./dba.md)
### Usage
```js
<dba>.updateBal(id, amount)
```

| Parameter | Type | Optional | Description |
| --- | --- | --- | --- |
| id | Snowflake | no | A Valid User ID |
| amount | Number | no | A Valid Number |

### Example
```js
    const Discord = require('discord.js');
    const dba = require('discord-dba');
    const client = new Discord.Client();
    const prefix = "!";
    
    client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    });
    
    client.on('message', message => {
      if (!message.content.startsWith(prefix)) return;
      if (message.author.bot) return;
      let command = message.content.split(/\s+/g)[0].slice(prefix.length).toLowerCase();
      let args = message.content.split(/\s+/g).slice(1);
      if (command === "add") {
        if (!args[0] || isNaN(args[0])) return message.reply ('Please Specify a valid amount to add!');
            const num = parseInt(args[0]);
            dba.updateBal(message.author.id, args[0]).then((i) => {
                message.channel.send(`**You got $${num}!**\n**New Balance:** ${i.money}`);
            })
      };
    });
    
    client.login('TOKEN');
```
