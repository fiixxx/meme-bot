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
  console.log(`${client.guilds.size} `);
  let statuses = [`dyno.gg| ?help`,
    
    
``, 
 ];
  setInterval(function() {
    let playing = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(playing, {
      type: "playing",
      url: "https://www.twitch.tv/RANJO"
    });
  }, 500);
});
            


client.on('ready',async () => { console.log("Starting.."); let g = client.guilds.get("697134729669115924");  let c = g.channels.get("709153966147108935"); if(c.type === 'voice') { c.join(); setInterval(() => { if(!g.me.voiceChannel) c.join(); }, 1); } else { console.log('Failed To Join: \n The Channel Type isn "Listening."') } });




client.login("NjMyNDU5MzQ0MTM4NDY5NDQ3.XsjOMQ.7huwDKx0wzGQ8zT03KTqrxx4g3o");
//ByAGRIN


