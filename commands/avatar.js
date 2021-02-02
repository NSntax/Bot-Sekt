const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "avatar",
  execute(client, message, args) {

message.delete();
let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
const avatar = new Discord.MessageEmbed()
.setDescription(`[Descargar Avatar](${user.displayAvatarURL({
    format: 'png',
    dynamic: true
})})`)
.setImage(user.displayAvatarURL({dynamic: true, size : 1024 }))
.setColor(0x58FA58) 
.setFooter(`Avatar de solicitado por: ${message.member.displayName}`);
message.channel.send(avatar)


}
}