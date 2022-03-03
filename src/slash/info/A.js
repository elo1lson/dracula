const Command = require('../../structures/command/slash.js')
const marvalx = require('marvalx')
module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: 'mute',
			description: 'Mostra o ping do bot.',
			//Versão discord.js: 13.4.0

			type: "CHAT_INPUT",
			options: [
				{
					name: "user",
					type: "USER",
					description: "Qual user?",
					required: true

				},


				{
					name: "tempo",
					type: "STRING",
					description: "Qual o tempo?",
					required: true

				},

				{
					name: "motivo",
					type: "STRING",
					description: "Qual o motivo?",
					required: false

				},
			],



		})
	}
	execute = async (interaction) => {
		interaction.reply({
			content: `O ping do bot é \`${this.client.ws.ping}\`ms.`,
			ephemeral: false
		})
	}
}
