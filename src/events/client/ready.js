const Event = require('../../structures/event/event.js')

module.exports = class extends Event {
  constructor(client) {
    super(client, {
      name: 'ready'
    })
  }

  execute = async () => {
 /*   this.client.user.setActivity(`Cuidando de você  \n Cluster: ${this.client.cluster.id}[${this.client.shardCount}]`, { type: "PLAYING" })
    this.client.user.setStatus('online')
  */  console.log(`Bot ${this.client.user.username} logado com sucesso em ${this.client.guilds.cache.size} servidores.`)
    
  }
}
