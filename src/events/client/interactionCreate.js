const Event = require('../../structures/event/event.js')
module.exports = class extends Event {
	constructor(client) {
		super(client, {
			name: 'interactionCreate'
		})
	}
	execute = async (interaction) => {
		if (interaction.isCommand()) {
			const cmd = this.client.commands.find(c => c.name === interaction.commandName)
			if (cmd) {

				cmd.execute(interaction)
			}
		}
	}
}