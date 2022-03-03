const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
const extra = require('../../extra.js')
const db = require('quick.db')
module.exports = new Command({
	name: 'start',
	description: extra.descriptions.INVITE.description,
	category: 'Bot',
	aliases: ['convite'],
	usage: {
		ob: "none",
		op: "none"
	},
	author: 'tomori',
	run: async (client, message, args) => {
		var channel = await db.fetch(`servers.${message.guild.id}`)
		if (!channel) {
			var msg = db.set(`servers.${message.guild.id}`, `${message.channelId}`)
			return message.reply({ content: "Canal setado com sucesso! Começe a contar!" })
		}
		if (channel) {
			return message.reply({ content: "Já tem um canal setado!" })
		}
	}
})
