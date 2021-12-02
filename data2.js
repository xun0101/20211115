import axios from 'axios'
import schedule from 'node-schedule'

// 資料陣列
export let data = []

// 更新資料的function
const getData = () => {
  axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ')
    .then(response => {
      data = response.data
      console.log('資料更新成功')
    })
}

// 機器人啟動時先更新資料
getData()

// 設定每日0:00更新
schedule.scheduleJob('0 0 * * *', getData)
