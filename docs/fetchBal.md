### dba#fetchBal
Method of [dba](./dba.md)
### Usage
```js
<dba>.fetchBal(id)
```

| Parameter | Type | Optional | Description |
| --- | --- | --- | --- |
| id | Snowflake | no | A Valid User ID |

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
      if (command === "bal" || command === "balance") {
            dba.fetchBal(message.author.id).then((i) => {
                message.channel.send(`**Balance:** ${i.money}`);
            });
      };
    });
    
    client.login('TOKEN');
```
