const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "m";
const adminprefix = "m";
const developers = ["556849635335864371"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');//
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'p')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {//
    message.guild.leave();   //
  } else  
  if (message.content.startsWith(adminprefix + 'w')) {
  client.user.setActivity(argresult, {type:'WATCHING'});//
      message.channel.send(`**✅   ${argresult}**`)//
  } else
  if (message.content.startsWith(adminprefix + 'l')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)//
  } else
  if (message.content.startsWith(adminprefix + 't')) {
    client.user.setGame(argresult, "https://www.twitch.tv/zero");
      message.channel.send(`**✅**`)//
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
  if (message.content.startsWith(adminprefix + 'setprefix')) {//
  client.user.setPrefix(argresult).then
      message.channel.send(`Changing Prefix ..**${argresult}** `)//
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {//
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);//
}
});//



client.login(process.env.BOT_TOKEN);// 