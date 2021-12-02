import 'dotenv/config'
import linebot from 'linebot'
import folk from './folk.js'
import './data2.js'
import './data.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  console.log(event.message.text)
  if (event.message.type === 'text') {
    folk(event)
  } else {
    console.log('error')
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
