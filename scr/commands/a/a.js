const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
console.log(Command)
const b = new Command({
  name: 'b',
	description: 'Mostra o ping',
	aliases: ['pin'],
	run: async(client, message, args) => {
		message.reply("oi")
	}
})
module.exports = b