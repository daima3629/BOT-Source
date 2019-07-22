const Eris = require("eris");

var bot = new Eris("ここにbotトークン");

bot.on("ready", ()=>{
    console.log("Ready!");
    console.log(bot.channelGuildMap);
});

bot.on("voiceChannelJoin", (member, newChannel) => {
    let ch = newChannel.guild.defaultChannel;
        bot.createMessage('', member.username + "  が  " + newChannel.name + " に入室しました。");
});

bot.on("voiceChannelLeave", (member, oldChannel) => {
    let ch = oldChannel.guild.defaultChannel;
        bot.createMessage('', member.username + "  が  " + oldChannel.name + "  から退出しました。");
});

bot.on("voiceChannelSwitch", (member, newChannel, oldChannel) => {
    let ch = oldChannel.guild.defaultChannel;
        bot.createMessage('', member.username + "  が  " + oldChannel.name + "  から  " + newChannel.name + "  に移動しました。");
});

// Discord に接続します。
bot.connect();
