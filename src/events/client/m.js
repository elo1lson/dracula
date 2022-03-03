const Event = require('../../structures/event/event.js')

module.exports = class extends Event {
  constructor(client) {
    super(client, {
      name: 'messageCreate'
    })
  }
  execute = async (message) => {
		var db = require('quick.db')
		var channel = db.get(`servers.${message.guild.id}`)
		if(channel && message.content >= 0){
			
			var last = db.get(`servers.${message.guild.id}.channel.lastuser`)
			if(message.author.id == last){
				return message.reply("Pastel de flamgo")
			}else{
				db.set(`servers.${message.guild.id}.channel.lastuser`,`${message.author.id}`)
				message.react("👍🏻")
			}
		}
    let prefix = process.env.PREFIX
    let cor = process.env.COLOR
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase()

    if (message.author.bot) return;
    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (cmd.length === 0) return;
    let command = this.client.commands.get(cmd)
    if (!command) command = this.client.commands.get(this.client.aliases.get(cmd))

    try {
      command.run(this.client, message, args, prefix, cor)
    } catch (err) {
      console.error('Erro:' + err);
    }
  }
}
