
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
    `𝚂𝙽𝙳𝙰𝙽𝙼 𝙻𝙴𝙳𝙰🤦‍`,
    `❥︎𝕚𝕞 𝕟𝕠𝕥 𝕙𝕒𝕔𝕜𝕖𝕣...!`,
    `کوڕە جۆتیارم`,
    `باپیرە مارس`,
    `خاڵۆزای بۆتەکان`
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {      type: "STREAMING",      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});


        

client.on('ready',async () => { console.log("Starting.."); let g = client.guilds.get("672044546359689216");  
                                                             let c = g.channels.get("700801944121245858"); 
                                     if(c.type === 'voice') { c.join(); 
 setInterval(() => { if(!g.me.voiceChannel) c.join(); }, 1); } else 
 { console.log('Failed To Join: \n The Channel Type isn "Listeni_g."') } });

        client.login("NjE4ODM1ODIzNDI0NDM4Mjgy.XuvpgA.1-Y6P6AXtwaCg07pUhJKfgXKD1w")/////لێرە تۆکینیەکە دانێ

                      ////  AX CHUCKE /////
