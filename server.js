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
  console.log(`Online In Servers : ${client.guilds.size} `);
  let statuses = [`Servers: ${client.guilds.size} `, `1 2 3 4 5`, `Guy bxo`];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/RANJO"
    });
  }, 2000);
});

client.login(
  "mfa.yFHXszOBiy3vFc02M5egvEsxtyzjxJCpejWGDF9CLCJiyMbpLHR31MX5CY3RUTQxrpP6FzU7loNNRWt7r3ru"
);
