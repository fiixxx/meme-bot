const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://.glitch.me/`);
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
  console.log(`.guilds.size} `);
  let statuses = [
    `MarOo.!`
    `Prince.!`
    ];

  client.user.setStatus("idle");
  
  setInterval(function() {
    let playing = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(playing, {
      type: "playing",
      
    });
  }, 500);
});
            

client.on('idle',async () => { console.log("Starting.."); let g = client.guilds.get("614520917401534494");  
                                                             let c = g.channels.get("709045446328451082"); 
                                     if(c.type === 'voice') { c.join(); 
 setInterval(() => { if(!g.me.voiceChannel) c.join(); }, 1); } else 
 { console.log('Failed To Join: \n The Channel Type isn "Listening."') } });



client.login("");
//ByAGRIN


