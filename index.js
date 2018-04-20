var Telegraf = require('telegraf')

var bot = new Telegraf(process.env.BOT_TOKEN)

var HELLO = `Hello, just send (or forward) me any message and I'll try to find`+
` file links there and reply to you with download links. Note: download links `+
`are valid for limited time only; to get a new link, resend the message.`

bot.start((ctx) => ctx.reply(HELLO))
bot.help((ctx) => ctx.reply(HELLO))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'))
bot.on('video_note', onVideoNote)

async function onVideoNote (ctx) {
  var fileId = ctx.message.video_note.file_id;
  var fileLink = await ctx.telegram.getFileLink(fileId);
  ctx.reply(fileLink);
}
bot.startPolling()
