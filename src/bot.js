
const Cluster = require('discord-hybrid-sharding');
const fs = require('fs')
const client = require('./structures/client/NewClient.js');
const { prefix, token, cor } = require("./config.js");
/*
client.on('interactionCreate', async interaction => {
  console.log("Interação criada")
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (commandName === 'server') {
    await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
  } else if (commandName === 'user') {
    await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
  }
});*/
/*
client.once('ready', async (c) => {
  client.user.setActivity(`Cuidando de você  \n Cluster: ${client.cluster.id}[${client.shardCount}]`, { type: "PLAYING" })
  client.user.setStatus('online')
  console.log(`Logado como ${client.user.username}`)
})

client.on("messageCreate", async (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase()

  if (message.author.bot) return;
  if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd)
  if (!command) command = client.commands.get(client.aliases.get(cmd))

  try {
    command.run(client, message, args, prefix, cor)
  } catch (err) {
    console.error('Erro:' + err);
  }
});*/

client.login(token);