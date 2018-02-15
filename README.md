[![https://nodei.co/npm/discord-money.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/discord-money.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/discord-money)

# discord-money

Discord-money is made for [discord.js](https://discord.js.org/#/) verions 11.3.0 and above. [<img src="https://cdn.rawgit.com/gilbarbara/logos/e7b1dc2666c3dabe6c1276abd0a767b6ebd6af43/logos/nodejs-icon.svg" align="right" width="70">](https://nodejs.org)

**Note**: *This package is still under development. There could be some issues, so report them on the issue tab above.*

## Contents

- [Javascript](#Javascript)
	- [DiscordAPI](#DiscordAPI)
	 - [Discord.js](#Discord.js)
	 - [v11.3.0](#v11.3.0)
	 - [Discord-money](#Discord-money)
	 - [npm](#npm)
	 - [npm install discord-money](#npm-install-discord-money)
                                        
## Information

* **Version**: *0.2.0*
* **Node.js Requirements**: *Version 8+*

Install this package on [npmjs](https://www.npmjs.com/package/discord-money)

## No Copyright

It is against the rules to copyright this package of yours. This is made by the Node.js Manager of Citex Developers.

## Examples

See these quick and easy examples to use it for your Discord.js Bot.

### Start (Require and define discord-money)

Start to download discord-money by opening your terminal/cmd and type in: `npm install discord-money`

Require the files.
```js
const money = require('discord-money');
```
and add these quick & handy variables.
```js
// Prefix
let prefix = '!';
```

#### Look

It should look like this now.
```js

    const Discord = require('discord.js');
    const money = require('discord-money');
 
    // Define client for Discord
    const client = new Discord.Client();
 
    // This runs when a message is recieved...
    client.on('message', message => {
 
        // Prefix
        let prefix = '!';
	
    });
```

### Fetching Balances (Fetching your money from the system)

Usage:
```js
money.fetchBal(message.author.id);
```

Sending the message to the channel you typed in.
```js
money.fetchBal(message.author.id).then((i) => { // The i is the ID of the message author!
	message.channel.send('**Balance:** ${i.money}');
});
```

And as last add the command input.
```js
// Example: Fetching Balance
        if (message.content.toUpperCase() === `${prefix}BALANCE`) {
            money.fetchBal(message.author.id).then((i) => { // money.fetchBal grabs the userID, finds it, and puts it into 'i'.
                message.channel.send(`**Balance:** ${i.money}`);
            });
        }
```

### Updating Balances (Updating your money into the system)

Usage:
```js
money.updateBal(message.author.id, /*amount in numbers*/);
```

Sending the message to the channel you typed in and updating the balance.
```js
money.updateBal(message.author.id, 500).then((i) => { // The i is the ID of the message author!
	message.channel.send('**You got $500!**\n**New Balance:** ${i.money}');
});
```

And as last add the command input.
```js
// Example: Updating Balance
        if (message.content.toUpperCase() === `${prefix}PAY`) {
            money.updateBal(message.author.id, 500).then((i) => { // money.fetchBal grabs the userID, finds it, and puts it into 'i'.
                message.channel.send(`**You got $500!**\n**New Balance:** ${i.money}`);
            });
        }
```
