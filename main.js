const {Telegraf} = require('telegraf');
require('dotenv').config();

const friends = {
    Theng: {
        PossibleName: ['theng','st', 'sze'],
        Message: 'Hello my friend',
    },
    Xinying: {
        PossibleName: ['xy', 'ying', 'yin'],
        Message: 'Hello my friend, i like ur smile',
    },
    Kaixin: {
        PossibleName: ['kx','kai'],
        Message: 'Hello my friend',
    },
    Yaohao: {
        PossibleName: ['yh', 'hao'],
        Message: 'Hello my friend',
    },
    Weiyao: {
        PossibleName: ['wy', 'wei', 'heng'],
        Message: 'Hello my friend',
    },
    Daniel: {
        PossibleName: ['dan'],
        Message: "baka",
    }
};

const bot = new Telegraf(process.env.BOT_TOKEN)
var Person;

bot.on('message', (ctx) => {
    
    var name = ctx.update.message.from.first_name.concat(" ",ctx.update.message.from.last_name," ", ctx.update.message.from.username).toLowerCase();

    for (const [key, value] of Object.entries(friends)) {
        for (var ps of value.PossibleName){
            name.includes(ps) ? Person = key : null;
        }        
    }
    Person ? ctx.reply(`Dear ${Person}, \n${friends[Person].Message}`): ctx.reply('Congrats friend! We graduated!🎊🎊🎊');
})

bot.launch();
