const firebase = require("firebase/app")
const db = require('firebase/database');
//const { getDatabase, ref, set, onValue  } = require("firebase/database");

var firebaseConfig = {
	apiKey: "AIzaSyDaBjQQgDmon2dlHr-QmquI8tKIbuzXV1Q",
	authDomain: "stellar-62f9f.firebaseapp.com",
	projectId: "stellar-62f9f",
	storageBucket: "stellar-62f9f.appspot.com",
	messagingSenderId: "82409429792",
	appId: "1:82409429792:web:09de1d8e52cc428bec1545",
	measurementId: "G-H4T8B74CK1"
};

const app = firebase.initializeApp(firebaseConfig)
const database = db.getDatabase(app);

//Function para gravação de dadps
const setData = async (path, obj) => {
  db.set(db.ref(database, path), obj);
}
const getData = async (path, action) => {
  const referencia = db.ref(database, path);
  db.onValue(referencia, action);
  //action será um function com parametro snapshot
  //snapshot é o retorno do valor da path
  //(snapshot) => { console.log(snapshot.val());}
  //function(snapshot){ console.log(snapshot.val());}
}
//Object referênciando as functions
module.exports = {
	setData: setData,
  getData: getData
};

//TESTE
//Gravar dados 
// db.set(db.ref(database, `/test/1`), {
// 	teste: "teste"
// });
// Ler registro
// const teste = ref(database, '/teste/1');
// onValue(teste, (snapshot) => {
//   const data = snapshot.val();
//   console.log(data);
// })

const Cluster = require("discord-hybrid-sharding");
const { token } = require("./config.js");
const manager = new Cluster.Manager(`${__dirname}/bot.js`, {
	mode: "process",
	token: token,
	usev13: true,
});



manager.on('message', (shard, message) => {
	console.log(`Shard[${shard.id}]: ${message._eval} - ${message._result}`);
});

manager.on('clusterCreate', shard => {
	console.log(`[${new Date().toString().split(' ', 5).join(' ')}] cluster[${shard.id}] iniciado!`);
});

manager.on("debug", (data) => {
	console.log(data)
});

manager.spawn();