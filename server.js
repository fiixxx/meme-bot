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
  let statuses = [`ByAGRIN`,
    
    
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
            



client.login("");
//ByAGRIN


