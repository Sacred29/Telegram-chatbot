const {Telegraf} = require('telegraf');
require('dotenv').config();

const friends = {
    Theng: {
        PossibleName: ['theng','st', 'sze'],
        Message: "Firstly, Im so proud of u, watching u struggle but not giving up and giving no shits was something that I really looked up to. Secondly, thank you for everything. Thank you for the fun times and entertaining my bullshit, but also Thank you for the lessons you have taught me thru the bitter and tough stages of our friendship. Being friends with you is tough, but I don't regret making that awkward joke in qinghai (which u prob don't rmb ahaha). Lastly, I will and already miss u, from ur stupid jokes and faces to the cold unresponsive texts. I'll miss everything. As a friend, I love you and I wish you the best for ur future endeavors. If we ever cross paths again, don't just ignore me pls ahaha. Also, I hope ur picky ass will finally find someone u fancy, Ill be expecting a wedding invite soon :P",
    },
    Xinying: {
        PossibleName: ['xy', 'ying', 'yin'],
        Message: "dear dear xy... will you ever stop overthinking? XD. Over the last 3 years, I concluded that u r just v rude... aha sike got u :P (dont cry pls). Honestly, thank you for just being there. You were a rock, someone I could depend on for solving issues. Thank you for helping me out w handling w sze theng. I appreciate it very much.",
    },
    Kaixin: {
        PossibleName: ['kx','kai'],
        Message: "my friend, ex-crush and forever eyecandy. Thank u for being there for the fun times. It can be hard to click with most people, but it happened so naturally with you! I remember u were so cute when we first went out on a 1-1 adventure! I know that these past 3 years has been alot, many situations mostly bad. But I hope you will be able to find that bubbliness again. Also, although it physically hurts me to say, I hope u find someone you fancy. I love you and wish you the best for your future endevors. ",
    },
    Yaohao: {
        PossibleName: ['yh', 'hao'],
        Message: '兄弟， 我会用华文写出这个件徐。 我要非常的感谢你，在我最低点时. ok nvm i give up ahahaha. But thank you for teaching me ur values and being accepting to mine as well. but most important of all, thank you for ur encouragement when i was at my lowest. I really appreciate it. Thank u brother and I wish u luck in ur future endaevors.',
    },
    Weiyao: {
        PossibleName: ['wy', 'wei', 'heng'],
        Message: "tbh, I don't have much to say. But I appreciate that u will put ur 2 cents worth of opinions into whenever i need some advice. I apprectiate it alot, as if u don't care like u say u don't, u wldn't say anything. Idk what u plan to do, but i wish u the best and hopefully u can find something u are happy doing.",
    },
    Daniel: {
        PossibleName: ['dan'],
        Message: "baka",
    }
};

const bot = new Telegraf(process.env.BOT_TOKEN)
var Person;

bot.on('message', (ctx) => {
    console.log("context",ctx);
    
    var name = ctx.update.message.from.first_name.concat(" ",ctx.update.message.from.last_name," ", ctx.update.message.from.username).toLowerCase();

    for (const [key, value] of Object.entries(friends)) {
        for (var ps of value.PossibleName){
            name.includes(ps) ? Person = key : null;
        }        
    }
    Person ? ctx.reply(`Hi ${Person}, \n${friends[Person].Message}\n ~ Daniel`): ctx.reply('Congrats friend! We graduated!🎊🎊🎊');
})

bot.launch();
