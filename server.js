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
    `!      𝐇𝐀𝐉𝐈๏𝐌𝐄𝐊𝐌𝐄𝐊📿`,
    `!                𝗛𝗔𝗝𝗘 ๏𝗦𝗛𝗘𝗟𝗕𝗬📿`,
    `༆ 𝐿𝑂𝑅𝐷 _  𝑆𝑄𝑊𝐴𝐷 ༆`,
    `الله اکبر`,
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
  
  if (message.content.toLowerCase() === prefix + "p") {
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
  if (message.content.toLowerCase() === "c") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000).then(
      message.channel.send(':bank: | ** your account balance is `$10,00000`.**')
        
         )
      }
    }
          )
           client.on("message", async message => {
  if (message.content.toLowerCase() ===  "d") {
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
client.login
("mfa.0UKyCTb064xKAmZVZCCPY5cjLuMrhmKbVu4OVaog9mPYXblBhwTj1yiTfZh7L7VgKBnv5-Oh881K-Ot5ZPyB");
//lera token dane nawe mnish😂

