
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

    `زۆڵـــــی پـــــڕۆچـــــێکــــــت`,
    `fhelp`,
    `دونیــــای کــــۆمـــیدیا`
    
  
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

var q41 = "f41"

var q42 = "f42"

var q43 = "f43"

var q44 = "f44"

var q45 = "f45"

var q46 = "f46"

var q47 = "f47"

var q48 = "f48"

var q49 = "f49"

var q50 = "f50"

var q51 = "f51"

var q52 = "f52"

var q53 = "f53"

var q54 = "f54"

var q55 = "f55"

var q56 = "f56"

var q57 = "f57"

var q58 = "f58"

var q59 = "f59"

var q60 = "f60"

var q61 = "f61"

var q62 = "f62"

var q63 = "f63"

var q64 = "f64"

var q65 = "f65"

var q66 = "f66"

var q67 = "f67"

var q68 = "f68"

var q69 = "f69"

var q70 = "f70"

var q71 = "f71"

var q72 = "f72"

var q73 = "f73"

var q74 = "f74"

var q75 = "f75"

var q76 = "f76"

var q77 = "f77"

var q78 = "f78"

var q79 = "f79"

var q80 = "f80"

var q81 = "f81"

var q82 = "f82"

var q83 = "f83"

var q84 = "f84"

var q85 = "f85"

var q86 = "f86"

var q87 = "f87"

var q88 = "f88"

var q89 = "f89"

var q90 = "f90"

var q91 = "f91"

var q92 = "f92"

var q93 = "f93"

var q94 = "f94"

var q95 = "f95"

var q96 = "f96"

var q97 = "f97"

var q98 = "f98"

var q99 = "f99"

var q100 = "f100"

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
message.react('🔊')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`****`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/BNS_ENQZNak', {audioonly: true});
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
  
  if (message.content === q32 ) {
message.react('🔊')
    message.reply('بەقورئان کەتە بەرامبەرم هههه چییە مەسەلە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/TQhAEe8xWiQ', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  if (message.content === q33 ) {
message.react('🔊')
message.reply('نانا ژن مەهێنن سەر لەخۆت مەشێوێنە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/PGcFJhMN2Cc', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  
  
  if (message.content === q34 ) {
message.react('🔊')
message.reply('پەیامی هەمزە خۆشناو بڕۆ دەرێ لە ژیانم')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/nTbHrQPyfOg', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

  
  if (message.content === q35 ) {
message.react('🔊')
message.reply('وازم لە جگارە هێنا')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/YRzFLQLcYg4', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  
  if (message.content === q36 ) {
message.react('🔊')
message.reply('دەبیتە 300 لۆ کاکە هاتیە چێندەر هههه')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/hw7IWWNvac8', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  
  if (message.content === q37 ) {
message.react('🔊')
message.reply('کۆڕۆنا فول ئەپدەیتە هههههه')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`**عزيزي , اذا اردت الإستماع للقرآن الكريم فعليك الدخول لقناة صوتية**`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/mykzOxBqu00', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  if (message.content === q38 ) {
message.react('🔊')
message.reply('کاکە دەنگت نایەت هههه مڵدم')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/OE5IBQ6IuJ8', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  
  if (message.content === q39 ) {
message.react('🔊')
message.reply('بابەکەت توووووووت بەس بتبینم لە هەولێر')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/3-_GCmr7mcI', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  if (message.content === q40 ) {
message.react('🔊')
message.reply('بەس جیلی تیک تۆک تێدەگات کوان جیلی تیک تۆک')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/NfpI9lbZn_Q', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}

  
  if (message.content === q41 ) {
message.react('🔊')
message.reply('ئەوەی لێدەو خۆت کڕکە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/ZdMM9e0FRf0', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  if (message.content === q42 ) {
message.react('🔊')
message.reply('قون ڕەش')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/AzEO7gg7tKE', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  
  
  if (message.content === q43 ) {
message.react('🔊')
message.reply('سورە ئێ دە سورە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/Y4_PPu0LMu0', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q44 ) {
message.react('🔊')
message.reply('بەقوەترین مەوعید ههه تاکۆتای گوێی لێ بگرە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/JonfRWNMGrM', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q45 ) {
message.react('🔊')
message.reply('لە مەعەدەی خۆمان وا ناسراوم')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/cyGN9GgrWy4', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q46 ) {
message.react('🔊')
message.reply('زەختی لەمێشکت بکە هههه مڵدم بەخوا')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/xqMqjUCUW2s', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q47 ) {
message.react('🔊')
message.reply('وەی شەلەشەل قاچم شەلەل')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/iNUWsDRJ65E', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q48 ) {
message.react('🔊')
message.reply('نەکەی فەرامۆشم بکەی')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/vk_Oh3ryonE', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q49 ) {
message.react('🔊')
message.reply('دادە توخوا دەبیە کەپڵم مڵدم ههههه')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/FQoFuT0Qb1Q', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q50 ) {
message.react('🔊')
message.reply('جیران و هەمزە گێژن')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/QMavZDZTtvA', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  
  if (message.content === q51 ) {
message.react('🔊')
message.reply('ئەرێواللە وییە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/5M35YUqqVEE', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q52 ) {
message.react('🔊')
message.reply('بەس هینەکە بڵێ ها لیلیلیلیلیلی')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/G0iXGko1fWU', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q53 ) {
message.react('🔊')
message.reply('سندان باشە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/xm_pMPUTT-s', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q54 ) {
message.react('🔊')
message.reply('کاتێک مولحیدێک سەرخۆش ئەبێت')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/QNo5-hDhSjs', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  if (message.content === q55 ) {
message.react('🔊')
message.reply('باسی عوکمەت')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/Zi1gsBZJ4PY', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q56 ) {
message.react('🔊')
message.reply('دەڵێم بابە ژنم لۆ بینە دەڵێ ها بگرە گونم')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/zH0vwBnkyGs', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q57 ) {
message.react('🔊')
message.reply('های گدمۆڕنینگ ')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/kB3mfwfnjRo', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q58 ) {
message.react('🔊')
message.reply('پیو لەو وەنیەی')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/lnkiXy_2g1A', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  if (message.content === q59 ) {
message.react('🔊')
message.reply('تەسویرە نا ڤیدۆیە مدم ڕێک')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/DE08kMxdvmM', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q60 ) {
message.react('🔊')
message.reply('بەجدی بەقوەتە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/CFLzZeq3DFA', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q61 ) {
message.react('🔊')
message.reply('تەڵەبەی زۆڵ')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/UZ7H2hlq6P4', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q62 ) {
message.react('🔊')
message.reply('هەندەک بەنزین بینن خۆم دەکۆژم واللە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/TDAKfMKDirE', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  if (message.content === q63 ) {
message.react('🔊')
message.reply('هەی مەشڕوب خۆر کەی نوێژتان کردیە کەی ههههه')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/DPrH9rDBAMo', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q64 ) {
message.react('🔊')
message.reply('هەستم لەدەمت هەڵدەم شەق')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/_fuXHBuSUN4', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q65 ) {
message.react('🔊')
message.reply('بەزمی سۆنەو دارستان')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/llozDJL-Nik', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q66 ) {
message.react('🔊')
message.reply('شەڕەبەندی سۆنە بەخوای فلیمە ڕێک مڵدم')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/-GwTmaHlPYY', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  if (message.content === q67 ) {
message.react('🔊')
message.reply('بەزمی سۆنە ڵەگەڵ دیاری ئەکیدی کوڕی من نیت ههه ڕێک مدم')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/N23O9d6tvAo', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q68 ) {
message.react('🔊')
message.reply('400 ملیارەکە چی لێهات ')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/PnoXLvjaZ2g', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q69 ) {
message.react('🔊')
message.reply('حەوت ڕۆژە من لەماڵم ڕەشە سپۆڕت')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/lU_yj3xKtmo', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q70 ) {
message.react('🔊')
message.reply('قلی پەبامی بۆ سۆنە هەیە بەخوا زۆڵی هههه')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/SX53B42Hpvw', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  if (message.content === q71 ) {
message.react('🔊')
message.reply('باران ژیانا خۆ بگۆڕە ژنێ بینە هههه')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/DELZmPuw8S0', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q72 ) {
message.react('🔊')
message.reply('ڕوی گەلەک قەیمە هەر دێتەوە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/2BLeJXg0dx4', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q73 ) {
message.react('🔊')
message.reply('ئەوەش لە ڕقی میسی باشە کاکە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/VrUqe5SaJwQ', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q74 ) {
message.react('🔊')
message.reply('کەرینتینەش ئیشی باشە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/hIic4mShbDk', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  if (message.content === q75 ) {
message.react('🔊')
message.reply('کۆڕۆناهاتتت ههههه')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/Lqb_gycM1Sw', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q76 ) {
message.react('🔊')
message.reply('تەواو وەیە ناچینە پاریس هههه مڵدم')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/I5rf50lmsyg', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q77 ) {
message.react('🔊')
message.reply('هەڵیان پچراند ههه مڵدم')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/mdv5u073cWM', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q78 ) {
message.react('🔊')
message.reply('سایەش هاتەوە دەنگ کاکە بڕۆن سەیری ڵایڤ بکەن')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/wTDCE1krmZM', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  if (message.content === q79 ) {
message.react('🔊')
message.reply('ملا دشتی پیاو بو لەخۆی')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/nKbryjMMQh4', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q80 ) {
message.react('🔊')
message.reply('گبخ براکەم ')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/llLkxKPNZqc', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q81 ) {
message.react('🔊')
message.reply('مەلاقاتیل و سینی دەموچاو کچە ههه مڵدم ')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/1aIyqnoIQX4', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q82 ) {
message.react('🔊')
message.reply('بەزمی مەلاقاتی و ناوەکان')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/x42Sf6JfAq0', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  if (message.content === q83 ) {
message.react('🔊')
message.reply('بەس بزانم کچان لۆ ئەوها گەورە دەبن')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/BjQtGKi35p0', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q84 ) {
message.react('🔊')
message.reply('کۆڕی قشپلی مدم بەخوای ')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/95PhOSl3-ZY', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q85 ) {
message.react('🔊')
message.reply('ههه مەلا قاتیل لۆت تێکەم')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/dSpJxMLFKSw', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q86 ) {
message.react('🔊')
message.reply('بزمی عەفلە و مەلا قاتیل')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/idtEc_cUmUI', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  if (message.content === q87 ) {
message.react('🔊')
message.reply('پانزە دۆنمم هەیە بەتامای هین هێنانم')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/nDduQX0_feI', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q88 ) {
message.react('🔊')
message.reply('ساتێک لەگەڵ قادری برام')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/Vo3P9PNnLaM', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q89 ) {
message.react('🔊')
message.reply('مەلا قاتیل و مونەرمی')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/9xUYDiLN-UI', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q90 ) {
message.react('🔊')
message.reply('ئەگەر سایە کەریم ببێتە مامۆستا')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/HFns6nPV--k', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q91 ) {
message.react('🔊')
message.reply('کورە بەساقەتان بم باسە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/l-ySxW-505w', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q92 ) {
message.react('🔊')
message.reply('.......کورە لۆ بیئێمم دە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/ujw_emwa47E', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q93 ) {
message.react('🔊')
message.reply('زەعمەت نەبێ سەعات چەندە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/ceYhw4ByWG0', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q94 ) {
message.react('🔊')
message.reply('تەنتە دێت تەنتە دەڕوات مڵدم')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/rs0R-Cd3R30', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q95 ) {
message.react('🔊')
message.reply('ناو دیدەیەو چوار پیتە کەی شو ئەکەم')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/PJ0QpK9YwKw', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q96 ) {
message.react('🔊')
message.reply('ئا ئا عەیاتم هەر بەجدی هەزەلیت')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/on2ryHPzvSc', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q97 ) {
message.react('🔊')
message.reply('ڕوت هەر وەک ڕوی قەعپەیە مڵدم')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/yk0Cuv97kHs', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q98 ) {
message.react('🔊')
message.reply('لەختە خەتەرەکەیە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/3atkxl6wwys', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
  
  
  
  if (message.content === q99 ) {
message.react('🔊')
message.reply('فێرکاری زمانی کۆری')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/dNHt_9StM08', {audioonly: true});
const dispatcher = connnection.playStream(stream);
});
}
if (message.content === q100 ) {
message.react('🔊')
message.reply('سینگڵیش بەو دەرەجەیە')
const voiceChannel = message.member.voiceChannel;
if (!voiceChannel) {
return message.reply(`تکایە بچۆ ژورێک ئینجا فەرمانەکە ئەنجام بدە`);
}
voiceChannel.join()
.then(connnection => {
let stream = yt('https://youtu.be/FQoFuT0Qb1Q', {audioonly: true});
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

        
const queue = new Map();
client.on("ready", () => console.log("🤖Ready Bot In Online🤖"));



client.on("message", message => {
if (message.content === "fhelp") {
const embed = new Discord.RichEmbed().setColor("#000000")
.setImage("https://media.discordapp.net/attachments/738379901656367124/739798803481100298/PicsArt_08-03-01.50.10.gif")
.setDescription(`**زانیاری بۆتکە**
👮|Protection Commands|👮 - زانیاری لەسەر بۆتەکە : 

f1   NEXT   f100

★✯★✯★✯★✯★✯★✯

fstop  👉   بۆ ڕاگرتنی بۆتەکە لەکاتی قسە کردن دا

★✯★✯★✯★✯★✯★✯

finvite  👉  بۆ ڕاکێشانی بۆتەکە بۆ سێرڤەرەکەت

★✯★✯★✯★✯★✯★✯

لە ئێستادا 100 ساوندمان تێکەڵ بەیەک کردووە چاوەڕێی شتی زیاتر بن


سەروو 18 ساڵ تکایە 🔞


**•SHETAGYAN ❥︎ SANFUR • **`);
message.author.sendEmbed(embed);
message.channel.sendEmbed(embed);
}
});


client.on("message", message => {
if (message.content === "finvite") {
if (!message.channel.guild)
return message.reply(
"Please Do not type bot commands in bot private chat"
);
let embed = new Discord.RichEmbed()
.setColor("GREEN")
.setTitle("=--> بۆ ڕاکێشانی بۆتەکە داگرە <--=")
.setImage("")
.setImage("https://media.discordapp.net/attachments/738379901656367124/739798803481100298/PicsArt_08-03-01.50.10.gif")
.setURL(
"https://discord.com/api/oauth2/authorize?https://discord.com/api/oauth2/authorize?client_id=737305888020365384&permissions=8&scope=bot"
) // Type Your Link here after ''
.setFooter("SHETA:SANFUR.", message.author.avatarURL);
message.channel.sendEmbed(embed);
}
});



client.on("ready", () => {
console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready',async () => { console.log("Starting.."); let g = client.guilds.get("");  
                                                             let c = g.channels.get(""); 
                                     if(c.type === 'voice') { c.join(); 
 setInterval(() => { if(!g.me.voiceChannel) c.join(); }, 1); } else 
 { console.log('Failed To Join: \n The Channel Type isn "Listeni_g."') } });

        client.login("NzM5Nzk0MTAxMjU5NDY4ODYx.Xyfo8g.W_Rb5qLKpPQ38s4js1bZ0sbWWqE")/////لێرە تۆکینیەکە دانێ

                      ////  by SANFUR OR SHETA /////
