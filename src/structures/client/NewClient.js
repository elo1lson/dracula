const BaseClient = require('./BaseClient.js')

const NewClient = new BaseClient()

NewClient.loadcommandsvanila()
//NewClient.loadslash()
NewClient.loadevents()
module.exports = NewClient
