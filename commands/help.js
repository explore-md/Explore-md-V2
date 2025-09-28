const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
*╭───(* *𝐄𝐗𝐏𝐋𝐎𝐑𝐄-𝐌𝐃-𝐕2* *)──╮*
*│* 友 ɴᴀᴍᴇ ʙᴏᴛ : EXPLORE MD V2
*│* 友 ᴠᴇʀsɪᴏɴ : 2.0 ᴍᴇᴛᴀ
*│* 友 ᴛᴇʟᴇɢʀᴀᴍ ᴅᴇᴠᴇʟᴏᴘᴇʀ  : t.me/gwetha
*│* 友 ʀᴜɴᴛɪᴍᴇ : loçked
*│* 友 ɪɴғᴏʀᴍᴀᴛɪᴏɴ :t.me/darknessfreenetsquad
*╰───────────────────╯*

*SCROLL FOR CMD:*

╭─「📁*GENERAL»*
*│* ⏣ .help or .menu
*│* ⏣ .ping
*│* ⏣ .alive
*│* ⏣ .tts <text>
*│* ⏣ .owner
*│* ⏣ .joke
*│* ⏣ .quote
*│* ⏣ .fact
*│* ⏣ .weather <city>
*│* ⏣ .news
*│* ⏣ .attp <text>
*│* ⏣ .lyrics <song_title>
*│* ⏣ .8ball <question>
*│* ⏣ .groupinfo
*│* ⏣ .staff or .admins 
*│* ⏣ .vv
*│* ⏣ .trt <text> <lang>
*│* ⏣ .ss <link>
*│* ⏣ .jid
*│* ⏣ .url
╰━━━━━━━━━━━━━━━━━━⭓ 

╭─«📁 *ADMIN»*
*│* ⏣ .ban @user
*│* ⏣ .promote @user
*│* ⏣ .demote @user
*│* ⏣ .mute <minutes>
*│* ⏣ .unmute
*│* ⏣ .delete or .del
*│* ⏣ .kick @user
*│* ⏣ .warnings @user
*│* ⏣ .warn @user
*│* ⏣ .antilink
*│* ⏣ .antibadword
*│* ⏣ .clear
*│* ⏣ .tag <message>
*│* ⏣ .tagall
*│* ⏣ .tagnotadmin
*│* ⏣ .hidetag <message>
*│* ⏣ .chatbot
*│* ⏣ .resetlink
*│* ⏣ .antitag <on/off>
*│* ⏣ .welcome <on/off>
*│* ⏣ .goodbye <on/off>
*│* ⏣ .setgdesc <description>
*│* ⏣ .setgname <new name>
*│* ⏣ .setgpp (reply to image)
╰━━━━━━━━━━━━━━━━━━⭓

╭─«📁 *OWNER»*
*│* ⏣ .mode <public/private>
*│* ⏣ .clearsession
*│* ⏣ .antidelete
*│* ⏣ .cleartmp
*│* ⏣ .update
*│* ⏣ .settings
*│* ⏣ .setpp <reply to image>
*│* ⏣ .autoreact <on/off>
*│* ⏣ .autostatus <on/off>
*│* ⏣ .autostatus react <on/off>
*│* ⏣ .autotyping <on/off>
*│* ⏣ .autoread <on/off>
*│* ⏣ .anticall <on/off>
*│* ⏣ .pmblocker <on/off/status>
*│* ⏣ .pmblocker setmsg <text>
*│* ⏣ .setmention <reply to msg/media>
*│* ⏣ .mention <on/off>
╰━━━━━━━━━━━━━━━━━━⭓

╭─「«📁 *IMAGE/STICKER»*
*│* ⏣ .blur <image>
*│* ⏣ .simage <reply to sticker>
*│* ⏣ .sticker <reply to image>
*│* ⏣ .removebg
*│* ⏣ .remini
*│* ⏣ .crop <reply to image>
*│* ⏣ .tgsticker <Link>
*│* ⏣ .meme
*│* ⏣ .take <packname> 
*│* ⏣ .emojimix <emj1>+<emj2>
*│* ⏣ .igs <insta link>
*│* ⏣ .igsc <insta link>
╰━━━━━━━━━━━━━━━━━━⭓  

╭─「«📁 *PIES»*
*│* ⏣ .pies <country>
*│* ⏣ .china 
*│* ⏣ .indonesia 
*│* ⏣ .japan 
*│* ⏣ .korea 
*│* ⏣ .hijab
╰━━━━━━━━━━━━━━━━━━⭓

╭─「«📁 *GAMES»*
*│* ⏣ .tictactoe @user
*│* ⏣ .hangman
*│* ⏣ .guess <letter>
*│* ⏣ .trivia
*│* ⏣ .answer <answer>
*│* ⏣ .truth
*│* ⏣ .dare
╰━━━━━━━━━━━━━━━━━━⭓

╭─「«📁 *AI»*
*│* ⏣ .gpt <question>
*│* ⏣ .gemini <question>
*│* ⏣ .imagine <prompt>
*│* ⏣ .flux <prompt>
*│* ⏣ .sora <prompt>
╰━━━━━━━━━━━━━━━━━━⭓

╭─「«📁 *FUN»*
*│* ⏣ .compliment @user
*│* ⏣ .insult @user
*│* ⏣ .flirt 
*│* ⏣ .shayari
*│* ⏣ .goodnight
*│* ⏣ .roseday
*│* ⏣ .character @user
*│* ⏣ .wasted @user
*│* ⏣ .ship @user
*│* ⏣ .simp @user
*│* ⏣ .stupid @user [text]
╰━━━━━━━━━━━━━━━━━━⭓

╭─「«📁 *TEXT MAKER»*
*│* ⏣ .metallic <text>
*│* ⏣ .ice <text>
*│* ⏣ .snow <text>
*│* ⏣ .impressive <text>
*│* ⏣ .matrix <text>
*│* ⏣ .light <text>
*│* ⏣ .neon <text>
*│* ⏣ .devil <text>
*│* ⏣ .purple <text>
*│* ⏣ .thunder <text>
*│* ⏣ .leaves <text>
*│* ⏣ .1917 <text>
*│* ⏣ .arena <text>
*│* ⏣ .hacker <text>
*│* ⏣ .sand <text>
*│* ⏣ .blackpink <text>
*│* ⏣ .glitch <text>
*│* ⏣ .fire <text>
╰━━━━━━━━━━━━━━━━━━⭓

╭─「«📁 *DOWNLOADER»*
*│* ⏣ .play <song_name>
*│* ⏣ .song <song_name>
*│* ⏣ .spotify <query>
*│* ⏣ .instagram <link>
*│* ⏣ .facebook <link>
*│* ⏣ .tiktok <link>
*│* ⏣ .video <song name>
*│* ⏣ .ytmp4 <Link>
╰━━━━━━━━━━━━━━━━━━⭓

╭─「«📁 *MISC»*
*│* ⏣ .heart
*│* ⏣ .horny
*│* ⏣ .circle
*│* ⏣ .lgbt
*│* ⏣ .lolice
*│* ⏣ .its-so-stupid
*│* ⏣ .namecard 
*│* ⏣ .oogway
*│* ⏣ .tweet
*│* ⏣ .ytcomment 
*│* ⏣ .comrade 
*│* ⏣ .gay 
*│* ⏣ .glass 
*│* ⏣ .jail 
*│* ⏣ .passed 
*│* ⏣ .triggered
╰━━━━━━━━━━━━━━━━━━⭓

╭─「«📁 *ANIME»*
*│* ⏣ .neko
*│* ⏣ .waifu
*│* ⏣ .loli
*│* ⏣ .nom 
*│* ⏣ .poke 
*│* ⏣ .cry 
*│* ⏣ .kiss 
*│* ⏣ .pat 
*│* ⏣ .hug 
*│* ⏣ .wink 
*│* ⏣ .facepalm 
╰━━━━━━━━━━━━━━━━━━⭓

╭─「«📁 *GITHUB»*
*│* ⏣ .git
*│* ⏣ .github
*│* ⏣ .sc
*│* ⏣ .script
*│* ⏣ .repo
╰━━━━━━━━━━━━━━━━━━⭓

Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363388565127379@newsletter',
                        newsletterName: 'GET 15 $ IN ONE DAY',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363388565127379@newsletter',
                        newsletterName: 'EXPLORE MANAGER',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
