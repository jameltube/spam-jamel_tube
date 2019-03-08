const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("553613906728321036")
setInterval(function() {
channel.send(`credit for jamel_tube`);
}, 30)
})

client.login(process.env.BOT_TOKEN);