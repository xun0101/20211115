import { data } from './data.js'
import { data as data2 } from './data2.js'
import flex from './flex.js'

export default async (event) => {
  try {
    if (event.message.type === 'text') {
      let newflex = JSON.parse(JSON.stringify(flex))
      console.log(flex)
      console.log(newflex)
      const replies = []
      let a = 0
      for (let i = 0; i < data.length; i++) {
        newflex.contents.header.contents.text = data[i].caseName
        newflex.contents.hero.url = data[i].representImage
        newflex.contents.body.contents[0].action.text = (`${data[i].caseName}活動介紹`)
        newflex.contents.body.contents[1].action.text = (`${data[i].caseName}活動特點`)
        if (data[i].caseName === event.message.text) {
          a = 1
        } else if ((`${data[i].caseName}歷史`) === event.message.text) {
          replies.push(`名俗由來:\n${data[i].historyDevelopment}`)
        } else if ((`${data[i].caseName}特點`) === event.message.text) {
          replies.push(`名俗特點:\n${data[i].judgeCriteria.join('\n')}`)
        } else if ((data[i].govInstitutionName || data[i].belongCity) === event.message.text) {
          replies.push(`特有名俗:\n${data[i].caseName}`)
        } else if ((`${data[i].caseName}地址`) === event.message.text) {
          replies.push(`地址:\n${data[i].hostContactorAddress}`)
        } else if ((`${data[i].caseName}活動特點`) === event.message.text) {
          replies.push(`活動特點:\n${data[i].ceremonyFeature}`)
        } else if ((`${data[i].caseName}活動介紹`) === event.message.text) {
          replies.push(`活動介紹:\n${data[i].registerReason}}`)
        }
      }
      for (let j = 0; j < data2.length; j++) {
        if (data2[j].actName === event.message.text) {
          replies.push(`活動說明:\n${data2[j].description}`)
        } else if ((`${data2[j].actName}詳情`) === event.message.text) {
          replies.push(`活動詳情:\n${data2[j].website}`)
        } else if ((`${data2[j].actName}地址`) === event.message.text) {
          replies.push(`活動地址:\n${data2[j].address}`)
        } else if ((`${data2[j].actName}現況`) === event.message.text) {
          replies.push(`活動現況:\n${data2[j].cycle}`)
        }
      }
      if (replies.length > 0) {
        event.reply(replies.slice(0, 5))
        console.log(replies)
      } else if (a === 1) {
        event.reply(newflex)
        console.log(newflex)
        console.log(flex)
      } else {
        event.reply('無此資料')
      }
    }
  } catch (error) {
    console.log(error)
    event.reply('錯誤')
  }
}
