const snekfetch = require('snekfetch');
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
const extra = require('../../extra.js')
const Discord = require('discord.js')
module.exports = new Command({
  name: 'ca',
  description: "client.lang.examples.CAT.description",
  category: 'Fun',
  aliases: ['gato'],
  usage: 'none',
  author: 'tomori',
  run: async (client, message, args) => {

    let avatar1 = message.author.avatarURL({ dynamic: true, format: "png", size: 1024 });
    const embed = new Discord.MessageEmbed()
      .setTitle(`você não é um adm da ${message.guild.name}`, )
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.channel.send({ embeds: [embed] })
    }

    const embed2 = new Discord.MessageEmbed()
      .setTitle(`Eu não tenho permissão para isso`, "")
    if (!message.guild.me.permissions.has("ADMISTRATOR")) return message.channel.send({embeds:[embed2]}).then(msg => msg.delete({ timeout: 20000 }))

    message.channel.permissionOverwrites.edit(message.guild.id, {
      SEND_MESSAGES: false,
      VIEW_CHANNEL: true
    })

    const lock = new Discord.MessageEmbed()

      .setTitle(`🔒| canal ${message.channel.name} foi bloqueando com sucesso!!`)
      .setColor("#C003FC")



    message.channel.send({embeds: [lock]})

  }
})