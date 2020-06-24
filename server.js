
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
const moment = require("moment");                              //////     DEV MARS    //////
const zalgo = require("zalgolize");
const math = require("math-expression-evaluator");            //////      DEV CHUCKE  //////
const figlet = require("figlet");
const fs = require("fs");
const ms = require("ms");
const prefix = "";
const { Client, Collection } = require("discord.js");

// Collections by mars
client.commands = new Collection();
client.aliases = new Collection();


client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
    ///// لێرانە شتێک بووسە بۆ ستریمینگەکە
    //// DASTKARE MAKA DACHE BGYE BEKAYTA EROR BA WRYAYI DASKARII MAKA
    `𝐢𝐦 𝐧𝐨𝐭 𝐡𝐚𝐜𝐤𝐞𝐫✈︎`,
    `𝔻𝔼𝕍☠︎︎𝕃𝔸ℍ𝕌ℝ𝕀𝕐`,
    `زۆڵــــــــی دیــــســـکـــۆرد  بـــــاوکـــی  بــــۆتـــەکــــان....Loading`,
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {      type: "playing",      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});


        

client.on('ready',async () => { console.log("Starting.."); let g = client.guilds.get("689606351063613547");  
                                                             let c = g.channels.get("724396659412566068"); 
                                     if(c.type === 'voice') { c.join(); 
 setInterval(() => { if(!g.me.voiceChannel) c.join(); }, 1); } else 
 { console.log('Failed To Join: \n The Channel Type isn "Listeni_g."') } });

        client.login("mfa.LZFnqM9OYAem7yV3aS_lK-jVufn1dPQ6el4-oxNE0bTsjYDn55fUhQR6tppkifNoyEjBV9_bzL083yMVICWB")/////لێرە تۆکینیەکە دانێ

                      ////  by mars /////
