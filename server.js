
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

const yt = require('ytdl-core');




function commandIs(str, msg){
return msg.content.toLowerCase().startsWith('*' + str);
}

function pluck(array) {
return array.map(function(item) { return item['name']; });
}

function hasRole(mem, role) {
if(pluck(mem.roles).includes(role)){
return true;
} else {
return false;
}

}


var servers = {};

var q1 = "f1"

var q2 = "f2"

var q3 = "f3"

var q4 = "f4"

var q5 = "f5"

var q6 = "f6"

var q7 = "f7"

var q8 = "f8"

var q9 = "f9"

var q10 = "f10"

var q11 = "f11"

var q12 = "f12"

var q13 = "f13"

var q14 = "f14"

var q15 = "f15"

var q16 = "f16"

var q17 = "f17"

var q18 = "f18"

var q19 = "f19"

var q20 = "f20"

var q21 = "f21"

var q22 = "f22"

var q23 = "f23"

var q24 = "f24"

var q25 = "f25"

var q26 = "f26"

var q27 = "f27"

var q28 = "f28"

var q29 = "f29"

var q30 = "f30"

var q31 = "f31"

var q32 = "f32"

var q33 = "f33"

var q34 = "f34"

var q35 = "f35"

var q36 = "f36"

var q37 = "f37"

var q38 = "f38"

var q39 = "f39"

var q40 = "f40"









function play(connection, message) {
var server = servers[message.guild.id];

server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));

server.queue.shift();

server.dispatcher.on("end", function() {
if (server.queue[0]) play(connection, message);
else connection.disconnect();
});
}

client.on("ready", () => {
console.log(`Quran bot is in ${client.guilds.size} servers `)
});

client.on("message", message => {
if (message.content === q1 ) {
message.react('🔊')
message.reply(`پەڕلەمانم بۆچییە بابی زەینەبی`)
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**you must joining a voice**`); 
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/f1BSxPEc6QA', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q2 ) {
message.react('🔊')
message.reply('تەکسیمی سەرخۆش مڵدم')

const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`****`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://m.youtube.com/watch?v=2GFZ5ZKuvYg', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q3 ) {
message.react('🔊')
message.reply('سلام و علیکوم')
  
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`****`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://m.youtube.com/watch?v=Nko-weAn1og', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q4 ) {
message.react('')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`****`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q5 ) {
message.react('🔊')
message.reply('ٲحمد خلیل وەی لۆ قنانە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**u**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://www.youtube.com/watch?v=e1h3BKAsozc', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q6 ) {
message.react('🔊')
message.reply('عومەر دەبابەو پارتی')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`****`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://m.youtube.com/watch?v=_B_g3tCIvjE', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q7 ) {
message.react('🔊')
message.reply('سۆنە تاقانە و قسەی خۆش')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://m.youtube.com/watch?v=baagGi2h8KQ', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q8 ) {
message.react('🔊')
  message.reply('تەئکیدی پیاوی بەخوا عیزیان کرد باشە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://m.youtube.com/watch?v=4UcfkmaTGR8', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q9 ) {
message.react('🔊')
message.reply('هیچ خۆش نەبوو')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://m.youtube.com/watch?v=hlAJjYBt26Q', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q10 ) {
message.react('🔊')
message.reply('تخوا ئەتو قوندەرنی')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://m.youtube.com/watch?v=jRn08PxNdcU', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q11 ) {
message.react('🔊')
message.reply('جیهازی درۆ کەشف کردن')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://m.youtube.com/watch?v=PvEiwPLX2cY', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q12 ) {
message.react('🔊')
message.reply('مەرد دیار')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://m.youtube.com/watch?v=b_72GczCgtM', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q13 ) {
message.react('🔊')
  message.reply('مڵدم واللە وەیە ئەوە بەس گەمە نییە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://m.youtube.com/watch?v=KPPnNGp0yh0', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q14 ) {
message.react('🔊')
  message.reply('هاوڕێیان کێ عەزی لە هینە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://www.youtube.com/watch?v=J0qoaAnBtwY', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q15 ) {
message.react('🔊')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://www.youtube.com/watch?v=wVqO40KNtkU&app=desktop', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q16 ) {
message.react('🔊')
message.reply('هینەکەتان زۆر بچوکە ئەزانی')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://www.youtube.com/watch?v=vbdygrt1FOE&app=desktop', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q17 ) {
message.react('🔊')
message.reply('وەڵلە تێناگەم ئەوە چ دەرێت')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://www.youtube.com/watch?v=7JdrU2hDCfE&app=desktop', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q18 ) {
message.react('🔊')
  message.reply('ئەستێرە هار بووە دە دایکەنە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://www.youtube.com/watch?v=dbuMKzHohZs&app=desktop', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q19 ) {
message.react('🔊')
  message.reply('لەمکارە زەرەرت کرد بەس گەوادید لۆ ماوە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://www.youtube.com/watch?v=uMADXv21AEM&app=desktop', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q20 ) {
message.react('🔊')
message.reply('قەعپەبابە دۆشکەی پێیە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://www.youtube.com/watch?v=pNuiABekk8s', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q21 ) {
message.react('🔊')
  message.reply('')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://m.youtube.com/watch?v=LEU25C7Dqg8', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q22 ) {
message.react('🔊')
  message.reply('ئەوە چ دەڵێی')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://m.youtube.com/watch?v=gH_x9BjdpG0', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q23 ) {
message.react('🔊')
  message.reply('وەرە بچنە بلاک ڕومەوە عەیاتم joy')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://m.youtube.com/watch?v=dzbj2ZfSqMY', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q24 ) {
message.react('🔊')
  message.reply('ساتێک بۆ ئارامی دڵ و مێشکمان')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://www.youtube.com/watch?v=2S6WL0luqbk', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q25 ) {
message.react('🔊')
  message.reply('عوسمان بێچارە سارەی بزر کردووە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://m.youtube.com/watch?v=9mC3-VYgv6s', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

if (message.content === q26 ) {
message.react('🔊')
  message.reply('من خەڵکی سلێمانیم گەنجمان تێ نەماوە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/xzPTzfQFshI', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  
  if (message.content === q27 ) {
message.react('🔊')
    message.reply('قسەکەنی زۆر تەواو هیچ حەکسی تیا نییە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/z6w1Msd9yBk', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  if (message.content === q28 ) {
message.react('🔊')
    message.reply('پەیوەندی لۆ جوابێ من نادەیەوە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/A708TONtNVs', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

  if (message.content === q29 ) {
message.react('🔊')
message.reply('حلیمە لە زانکۆیە هەردوو مەمکی لیمۆیە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/Ha9LXY1TgzM', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  
  
  if (message.content === q30 ) {
message.react('🔊')
message.reply('یان کەمپەرە یان هاکەرە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/ys_A_RO9CKM', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  
  if (message.content === q31 ) {
message.react('🔊')
message.reply('دەنا شێتە ڕامەبوێرە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/ah5H_rlG8xY', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  
  
  
  
  
if(message.content === "fstop" ) {
var servers = {};

if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();

}

if(message.content === "server2quran") {
message.channel.send(` QuranBot
شكرا لإستعمال البوت | Thanks You
`)
}


});

        

client.on('ready',async () => { console.log("Starting.."); let g = client.guilds.get("");  
                                                             let c = g.channels.get(""); 
                                     if(c.type === 'voice') { c.join(); 
 setInterval(() => { if(!g.me.voiceChannel) c.join(); }, 1); } else 
 { console.log('Failed To Join: \n The Channel Type isn "Listeni_g."') } });

        client.login("NzI5ODAzNzIzNDcxMzIzMjMx.XwX7Vw.1wQpf0nkqjyELJk6uBy9ypfpSA8")/////لێرە تۆکینیەکە دانێ

                      ////  by mars /////
