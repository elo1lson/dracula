const Command = require('../../structures/command/slash.js')
module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: 'ping',
			description: 'Mostra o ping do bot.'
		})
	}
	execute = async (interaction) => {
		let db = require('../../shard.js')
		var a = await db.getData('/a', async (snapshot) => {
		return snapshot.val();
		//console.log(snapshot.val())
		})
		console.log("variavel:   " + a)
		interaction.reply({
			content: `O ping do bot é \`${this.client.ws.ping}\`ms. ${a}`,
			ephemeral: false
		})
	}
}
