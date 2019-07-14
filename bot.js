// Discord bot implements 
const discord = require('discord.js'); 
const client = new discord.Client();
var data = require('./data.json');


client.on('ready', message =>
{
	console.log(`Logged in as ${client.user.tag}`);
  client.user.setActivity('prefix:y!', {
    type: 'STREAMING'
  });
});

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
var t,hour,minute,second,now; 
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
  function now(){
    process.env.TZ = 'Asia/Tokyo';
      t=new Date();
    hour=t.getHours();
    hour=('0'+hour).slice(-2);
    minute=t.getMinutes()
    minute=('0'+minute).slice(-2);
    second=t.getSeconds();
    second=('0'+second).slice(-2);
    now=hour+':'+minute+':'+second;
  }
//コマンドfunction終わり

//メイン
client.on('message', message =>
{
  switch(message.content){
    case 'y!help':
      sendRichEmbed(
      message,
      'ddf542',
      'コマンドヘルプ',
      '`y!help` このコマンドです\n`y!おみくじ` おみくじが引けます\n`y!now` 現在時刻を確認できます\n`y!say` 言ったことをそのまま返してくれます'
      );
    break;
    case 'y!おみくじ':
      omikuji();
      sendRichEmbed(
      message,
      'ddf542',
      'おみくじ結果',
      msg
      );
    break;
    case 'y!now':
      time();
      sendRichEmbed(
      message,
      'ddf542',
      '現在時刻',
      now
      );
    break;
  }
  switch(true){
    case message.content.startsWith('y!say'):
      message.channel.send(message.content.slice(6));
    break;
  }
  if(message.content.startsWith('db/botop')){
    if(message.author.id == '570243143958528010'){
        message.channel.send('BOT ADMIN ONLY');
    }else{
       message.channel.send('あなたはBOT管理者ではないため、このコマンドは実行できません');
    }
  } 
  
}
);
//メイン終わり


client.login('');
