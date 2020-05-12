const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://shellwelcomer.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
const zalgo = require("zalgolize");
const math = require("math-expression-evaluator");
const figlet = require("figlet");
const fs = require("fs");
const ms = require("ms");
const prefix = "";
const { Client, Collection } = require("discord.js");

// Collections
client.commands = new Collection();
client.aliases = new Collection();
client.on("ready", () => {
  console.log(`Online In Servers : ${client.guilds.size} `);
  let statuses = [
    `!      ⛓⚙𝑷𝑨𝑵𝑫𝑨๏𝑺𝑯𝑬𝑳𝑩𝒀⚙⛓`,
    `!                SHELBY UP⌨`,
    `☠ᵈᵉᵛ➪𝑷𝑨𝑵𝑫𝑨☠`,
`Servers: ${client.guilds.size} | Users: ${client.users.size}`, 
 ];
  setInterval(function() {
    let playing = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(playing, {
      type: "playing",
      url: "https://www.twitch.tv/RANJO"
    });
  }, 2000);
});
client.on("message", async message => {
  
  if (message.content.toLowerCase() === prefix + "") {
        message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000).then(
         message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}?bg=default.png`
          }
          
        ]
      }) 
      )
    }
});
client.on('typingStart', (ch, user) => { if(user.presence.status === 'offline') {
         ch.send(`ئةوةچية خةزةب خؤت ئؤفلاين كردووة چاتيش دةكةي ${user}`)
          .then(msg => {
              msg.delete(2000)
            
           client.on("message", async message => {
  if (message.content.toLowerCase() === "") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000).then(
      message.channel.send(':bank: | ** your account balance is `$19,98000`.**')
        
         )
      }
    }
          )
           client.on("message", async message => {
  if (message.content.toLowerCase() ===  "") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000).then(
      message.channel.send('**💰 you Got 💵 10,600 daily credits!**')
        
         )
      }
    }
          )
                      client.on("message", async message => {
  if (message.content.toLowerCase() ===  "Slaw") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000).then(
      message.channel.send('SLAW LA TOSH GYANA')
        
           )
         }
     }            
          )
           
           
           
           
            
          })
        }
  })
client.login("NTY1OTYyMjA0MzI3OTY4NzY5.Xro9gA.iNH4GQkoQxodY9-Cy_dUc2difEw");
//lera token dane nawe mnish😂

client.on("ready", async ready => {
  var i = 0;
  var list = [
    "!   ᵈ",
    "!   ᵈᵉ",
    "!   ᵈᵉᵛ",
    "!   ᵈᵉᵛ➪",
    "!   ᵈᵉᵛ➪𝑺",
    "!   ᵈᵉᵛ➪𝑺𝑯",
    "!   ᵈᵉᵛ➪𝑺𝑯𝑬",
    "!   ᵈᵉᵛ➪𝑺𝑯𝑬𝑳",
    "!   ᵈᵉᵛ➪𝑺𝑯𝑬𝑳𝑩",
    "!   ᵈᵉᵛ➪𝑺𝑯𝑬𝑳𝑩𝒀",
 ]; 
 setInterval(() => {
   var guild = client.guilds.get("703666022519013495")
   var reva = guild.members.get("565962204327968769")
   reva.setNickname(list[i]);
   
   if (i + 1 === 12) {
     i = 0;
   } else { 
     i++;
    
   } 
 }, 2000); 
});