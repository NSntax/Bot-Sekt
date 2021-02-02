const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "ban",
    alias: ["Ban", "BAN"],
    execute(client, message, args) {


        let user = message.mentions.users.first();
 let razon = args.slice(1).join(' ');
 var perms = message.member.hasPermission("BAN_MEMBERS");
 
 if(!perms) return message.react("❌"), message.channel.send(`:x: | You do not have permission to execute this command`);
   
   const err = new MessageEmbed()
   .setAuthor(message.guild.name, "https://cdn.discordapp.com/attachments/797170402693480548/797352527724675092/k516GpZ.png")
   .setTitle("Ban Hammer")
   .setDescription("¿Who do you want me to ban?")
   .setImage("https://media.giphy.com/media/qPD4yGsrc0pdm/giphy.gif")
   .setColor(0xEFFBFB)//////////////Hola que haz hecho el dia de hoy :D
     
 if (message.mentions.users.size < 1) return message.reply(err).catch(console.error);
 
 if (!razon) razon = "No reason attached"

 message.guild.member(user).ban();
 const embed = new MessageEmbed()
 embed.addField(`**User:**`, `${user.username}\n=======================`)
 embed.addField(`**ID From User:**`, `${user.id}\n=======================`)
 embed.addField(`**Reason:**`, `\`\`\`\"${razon}\"\`\`\`\n=======================`)
 embed.addField(`**Staff:**`, `${message.author.username}\n=======================`)
 embed.setFooter(message.author.username, message.author.displayAvatarURL)
 embed.setTimestamp() 
 embed.setColor(`#FF0000`)
 
   message.channel.send(embed)
   
   user.send(embed)

    }
}