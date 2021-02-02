const { MessageEmbed } = require("discord.js")
const request = require("request")

module.exports = {
    name: "b64-text",
    alias: ["base64-text    "],
    execute(client, message, args) {

        const a = args.join(" ")
        let ping = `https://some-random-api.ml/base64?decode=${a}` 
          
        request(ping, function(err, resp, body){
          if(err) return console.log(err.message);
          body = JSON.parse(body);

          const embed = new MessageEmbed()
          .setTitle("Decoded!")
          .setDescription("Base64: "+a+"\nText: "+body.text)
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
          .setColor("RANDOM")
          .setFooter("Request By: "+message.author.tag, message.author.displayAvatarURL())
          .setTimestamp();

          message.channel.send(embed)

  })
}
}
