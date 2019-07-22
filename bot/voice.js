const Eris = require("eris");

var bot = new Eris("NjAwMTAzNzY1NDQ1NzA1NzI4.XSvAsQ.HteFkH_LUH77-qv7omR_41T3Vog");

bot.on("ready", ()=>{
    console.log("Ready!");
    console.log(bot.channelGuildMap);
});

bot.on("voiceChannelJoin", (member, newChannel) => {
    let ch = newChannel.guild.defaultChannel;
        bot.createMessage(ch.id,voicelog)( member.username + "  が  " + newChannel.name + " に入室しました。");
});

bot.on("voiceChannelLeave", (member, oldChannel) => {
    let ch = oldChannel.guild.defaultChannel;
        bot.createMessage('587236929641381891', member.username + "  が  " + oldChannel.name + "  から退出しました。");
});

bot.on("voiceChannelSwitch", (member, newChannel, oldChannel) => {
    let ch = oldChannel.guild.defaultChannel;
        bot.createMessage('587236929641381891', member.username + "  が  " + oldChannel.name + "  から  " + newChannel.name + "  に移動しました。");
});

// Discord に接続します。
bot.connect();
