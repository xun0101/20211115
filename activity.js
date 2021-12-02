import axios from 'axios'

export default async (event) => {
  try {
    if (event.message.type === 'text') {
      const { data } = await axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ')
      const replies = []
      for (let i = 0; i < data.length; i++) {
        if (data[i].actName === event.message.text) {
          replies.push(`活動詳情:\n${data[i].description}`)
        }
        event.reply(replies)
      }
      event.reply('無此資料')
    }
  } catch (error) {
    console.log('error')
    event.reply('錯誤')
  }
}
