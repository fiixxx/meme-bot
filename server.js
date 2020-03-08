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
const prefix = "$$";

const { Client, Collection } = require("discord.js");

// Collections
client.commands = new Collection();
client.aliases = new Collection();

client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
    `Servers: ${client.guilds.size} | Users: ${client.users.size}`,
    `DEV JUBA`
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

client.on("guildMemberAdd", member => {
  let id = member.user.id;
  let m = member.user;
  var embed = new Discord.RichEmbed()
    .setThumbnail(m.avatarURL)
    .setImage("https://media.discordapp.net/attachments/682185524735246353/684796129061371910/a_fd4008cb50c8c72fdf60c5c65ed7ad27.gif")
    .addField(
      `WELCOME TO JUBA SERVER `, ///// nawakay bgora !!
      `<@${id}>`
    )
    .addField(
      " **بەخێر بێی بۆ سێرڤەرەکەمان بە ھیوای بەسەر بردنی کاتێکی خۆش:heart::raised_hand_tone1:**",
      `**${member.guild.name}**`
    )
    .addField("**تۆ ژمارە  لە سێرفەر** ", `${member.guild.memberCount} `)
    .setColor("RANDOM");
  var channel = member.guild.channels.find("name", "wᴇʟᴄᴏᴍᴇ"); ///// la bashy welcomesh har charek nawey welcomt gory abet la projektakash bigoryt
  if (!channel) return;
  channel.send({ embed: embed });
});

client.login("");
