const fs = require('fs')
const path = require('path')
const { Collection, Client } = require('discord.js');
const Cluster = require('discord-hybrid-sharding');
class Baseclient extends Client {
  constructor(opts) {
    super({
      shards: Cluster.data.SHARD_LIST,
      shardCount: Cluster.data.TOTAL_SHARDS,
      intents: 32767,
      allowedMentions: {
        parse: ["users", "roles"],
        repliedUser: false
      },
      ...opts
    })
	//	this.commands = []
    this.cluster = new Cluster.Client(this, true);
    this.commands = new Collection();
    this.aliases = new Collection();
    this.description = new Collection()
	//	this.loadslash()
  }/*
  loadslash() {
    let folder = 'src/slash'
    const categories = fs.readdirSync(folder)

    for (const category of categories) {
      const commands = fs.readdirSync(`${folder}/${category}`)

      for (const command of commands) {
        const commandClass = require(path.join(process.cwd(), `${folder}/${category}/${command}`))
        const cmd = new(commandClass)(this)

        this.commands.push(cmd)
      }

  }}
*/
  loadcommandsvanila() {
    try {
      const commands_path = path.join(__dirname, "..", "..", "commands");

      fs.readdirSync(commands_path).forEach(local => {
        const files = fs.readdirSync(path.join(commands_path, local));

        let command;
        for (let file of files) {
          if (file.endsWith(".js")) {
            command = require(path.join(commands_path, local, file));
            console.log('Comando ' + command.name + ' carregado com sucesso!')
            this.commands.set(command.name, command);
            for (let aliase of command.aliases)
              this.aliases.set(aliase, command.name);
          }
        }

      });
      console.log('Sucesso!')
    } catch (e) {
      console.log('Erro nos comandos: ' + e)
    }
  }
  loadevents() {
    let folder = 'src/events'
    const categories = fs.readdirSync(folder)

    for (const category of categories) {
      const events = fs.readdirSync(`${folder}/${category}`)

      for (const event of events) {
        const eventClass = require(path.join(process.cwd(), `${folder}/${category}/${event}`))
        const evt = new(eventClass)(this)

        this.on(evt.name, evt.execute)
      }
    }
  }
  setslash() {  
		//console.log(this.commands)
    // temporária 
    this.guilds.cache.get('936001139013476362').commands.set(this.commands)
    //this.application.commands.set(this.commands) 
  }

}
module.exports = Baseclient
