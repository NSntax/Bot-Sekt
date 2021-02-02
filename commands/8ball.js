const Discord = require("discord.js")

module.exports = {
    name: "8ball",
    alias: ["ball8", "8Ball"],
    execute(client, message, args) {
        message.delete();   
       let pregunta = args[0]
       if(!pregunta) return message.reply("But put an answer, dummy")

        var Respuestas = ["Yes", "No", "Probably", "Probably yes", "Probably not", "mmh I do not know"]
        var aleatorio = Math.floor(Math.random()*(Respuestas.length));  
        
        const embed = new Discord.MessageEmbed()
        .setDescription("8Ball")
        .addField("Question", pregunta)
        .addField("My answer", Respuestas[aleatorio])
        .setColor("#F2F5A9")

        message.channel.send(embed)

    }
}