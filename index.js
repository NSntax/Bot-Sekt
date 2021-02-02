const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
let prefixaw = "s/"
const { config } = require('process');
const { measureMemory } = require('vm');
const prefix = require('./commands/prefix');


client.queue = new Map()
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


function presence() {
    client.user.setPresence({
      status: "dnd",
      activity: {
        name: `s/help | on `+client.guilds.cache.size +` servers | v1.0 BETA`,
        type: "PLAYING"
      }
    })
  }

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  presence();
});

client.on('message', async message => {

    if (message.author.bot) return;
    if (!message.guild) return;



let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
        prefixes: prefixaw  
    };
}

let prefix = prefixes[message.guild.id].prefixes;

    if (!message.content.startsWith(prefix)) return;



  const args = message.content.slice(prefix.length).trim() .split(/ +/g);
    const command = args.shift() .toLocaleLowerCase(); 

   if(!client.commands.has(command)) return;

   try {
       client.commands.get(command).execute(client, message, args);

   }catch (err) {
       console.log(err);
       message.channel.send(err)
   }

})
      
      

client.login('ODAzNDY1MzczNDQ0NzM0OTk2.YA-LcA.Byv6VpTqRefNgPSqPuLflHQ4Mgc');