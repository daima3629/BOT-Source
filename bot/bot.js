// Discord bot implements
const discord = require('discord.js');
const client = new discord.Client();
const voice = require('C:/Users/sasaki/Desktop/BOT-Source-master/voice.js');
var data = require('./data.json');

client.on('ready', message =>
{
	console.log(`YUTA BOT IS SERVER LOGIN ${client.user.tag}`);
	client.user.setPresence({ game: { name: 'y!help' } });
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === '入室退室log');
  if (!channel) return;
  channel.send(
    {embed: {
      author: {
        name: "yutaBOT",
        icon_url: "https://cdn.discordapp.com/embed/avatars/0.png"
      },
      title: "メンバー入室log",
          description: "",
           color: 131379,
           timestamp: new Date(),
           footer: {
             icon_url: client.user.avatarURL,
             text: "©️ example | footer text"
            },
            fields: [
              {
                name: "***NAME***",
                value: `${member.user.tag}`
              },
              {
                name: "***USER ID***",
                value: `${member.user.id}`
              },
]}})});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find(ch => ch.name === '入室退室log');
  if (!channel) return;
  channel.send({embed: {
    author: {
      name: "yutaBOT",
      icon_url: "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    title: "メンバー退室log",
        description: "",
         color: 961818,
         timestamp: new Date(),
         footer: {
           icon_url: client.user.avatarURL,
           text: "©️ example | footer text"
          },
          fields: [
            {
              name: "***NAME***",
              value: `${member.user.tag}`
            },
            {
              name: "***USER ID***",
              value: `${member.user.id}`
            },
]}})});

function getRandom( min, max ) {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;

    return random;
}

function sendRichEmbed(message, color, title, description){
	var embed = new discord.RichEmbed()
    .setColor(color)
    .setTitle(title)
    .setDescription(description);
  message.channel.send(embed);
}

//コマンドfunction始め
var t,hour,minute,second,time;
var msg;
var omi=['大吉','中吉','小吉','半吉','末吉','末小吉','凶','中凶','小凶','末凶','大凶'];
function omikuji(){
  switch(getRandom(0,10)){
    case 0:
      msg=omi[0];
    break;
    case 1:
      msg=omi[1];
    break;
    case 2:
      msg=omi[2];
    break;
    case 3:
      msg=omi[3];
    break;
    case 4:
      msg=omi[4];
    break;
    case 5:
      msg=omi[5];
    break;
    case 6:
      msg=omi[6];
    break;
    case 7:
      msg=omi[7];
    break;
    case 8:
      msg=omi[8];
    break;
    case 9:
      msg=omi[9];
    break;
    case 10:
      msg=omi[10];
    break;
  }
}
  function time(){
    process.env.TZ = 'Asia/Tokyo';
      t=new Date();
    hour=t.getHours();
    hour=('0'+hour).slice(-2);
    minute=t.getMinutes()
    minute=('0'+minute).slice(-2);
    second=t.getSeconds();
    second=('0'+second).slice(-2);
    time=hour+':'+minute+':'+second;
  }

var jya=['✊','✌','✋'];
 function zyanken(){ 
  switch(getRandom(0,2)){
    case 0:
      msg=jya[0];
    break;
    case 1:
      msg=jya[1];
    break;
    case 2:
      msg=jya[2];
    break;
    case 3:
      msg=jya[0];
    break;
    case 4:
      msg=jya[1];
    break;
    case 5:
      msg=jya[2];
    break;
    case 6:
      msg=jya[0];
    break;
    case 7:
      msg=jya[1];
    break;
    case 8:
      msg=jya[2];
    break;
    case 9:
      msg=jya[0];
    break;
    case 10:
      msg=jya[1];
    break;
    case 11:
      msg=jya[2];
    break;
  }
}
var hazu=['ガチャを引いた！\n```ガラガラガラ.......ポンッ！残念！何も入っていなかった.......```\nまたチャレンジしよう！！','ガチャを引いた！\nガラガラガラ.......ポンッ！ん？開かねえ...うっ..うっ..パか！\n中から何か書かれたものが出てきた。と書かれていた。'];
 function gatya(){
   switch(getRandom(0,10)){
     case 0:
       msg=hazu[0];
     break;
     case 1:
       msg=hazu[1];
     break;
     case 2:
       msg=hazu[0];
     break;
     case 3:
       msg=hazu[0];
     break;
     case 4:
       msg=hazu[0];
     break;
     case 5:
       msg=hazu[0];
     break;
     case 6:
       msg=hazu[0];
     break;
     case 7:
       msg=hazu[0];
     break;
     case 8:
       msg=hazu[0];
     break;
     case 9:
       msg=hazu[0];
     break;
     case 10:
       msg=hazu[0];
     break;
    }
  }
//コマンドfunction終わり

//メイン

client.on('message', message =>
{
  if (message.author.bot || !message.guild) return
	switch(message.content){
    case 'info':
      message.channel.send(
        {embed: {
          author: {
            name: "yutaBOT ",
            url: "https://discordapp.com", // nameプロパティのテキストに紐付けられるURL
            icon_url: "https://cdn.discordapp.com/embed/avatars/0.png"
          },
          title: "INFO OF yutaBOT",
          description: "",
           color: 7506394,
           timestamp: new Date(),
           footer: {
             icon_url: client.user.avatarURL,
             text: "©️ example | footer text"
            },
            thumbnail: {
              url: "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            image: {
            url: "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            fields: [
              {
                name: ":one:開発者",
                value: "***yutarou1241477***"
              },
              {
                name: ":two:開発協力者",
                value: "***daima3629氏***"
              },
              {
                name: "field :three:",
                value: "__ここはfield 3の内容だよ__"
              },
              {
                name: "開発者へのお問い合わせ",
                value: "yutarou1241477(https://discord.gg/7ctVbtc)",
                inline: true
              },
              {
                name: "BOTを招待する",
                value: "BOT招待URL()",
                inline: true
              }
            ]
        }
     }
  );
     break;
    case 'y!help':
      sendRichEmbed(
      message,
      '90ff35',
      'コマンドヘルプ',
      '`y!help` このコマンドです\n`y!fs` ガチャを引くことができます\n`y!info` BOTの詳細を見ることができます\n`y!time` 現在時刻を確認できます\n`y!say` 言ったことをそのまま返してくれます\n`じゃんけん` botとじゃんけんができます\n`おみくじ` おみくじが引けます\n'
      );
    break;
		case 'おみくじ':
      omikuji();
      sendRichEmbed(
      message,
      'ffffff',
      'おみくじ結果',
      msg
      );
    break;
    case 'y!time':
      time();
      sendRichEmbed(
      message,
      'ffffff',
      '現在時刻',
      time
      );
    break;
    case 'ぐー':
      zyanken();
      sendRichEmbed(
      message,
      'ffffff',
      'じゃんけん',
      msg
      );
    break;
    case 'ぱー':
      zyanken();
      sendRichEmbed(
      message,
      'ffffff',
      'じゃんけん',
      msg
      );
    break;
    case 'ちょき':
      zyanken();
      sendRichEmbed(
      message,
      'ffffff',
      'じゃんけん',
      msg
      );
    break;
    case 'じゃんけん':
      sendRichEmbed(
      message,
      'ffffff',
      '***じゃんけん***',
      'botとじゃんけんができるよ！\n\n`ぐー`：ぐーを出すぞい\n`ちょき`：ちょきを出すぞい\n`ぱー`：ぱーを出すぞい'
      );
    break;
    case 'y!fs':
      gatya();
      sendRichEmbed(
      message,
      '11d1c9',
      'ガチャ',
      msg
      );
    break;
   }
  switch(true){
    case message.content.startsWith('y!say'):
      message.channel.send(message.content.slice(6));
    break;
  }
  if(message.content.startsWith('y!admin')){
    if(message.author.id == '534994298827964416'){
        message.channel.send('BOT ADMIN ONLY');
				message.channel.send('https://discordapp.com/api/oauth2/authorize?client_id=600103765445705728&permissions=0&scope=bot')
    }else{
       message.channel.send('あなたはBOT管理者ではないため、このコマンドは実行できません');
    }
  }
}
);
//メイン終わり


client.login('NjAwMTAzNzY1NDQ1NzA1NzI4.XSvAsQ.HteFkH_LUH77-qv7omR_41T3Vog');
