import axios from 'axios'
import cheerio from 'cheerio'

axios.get('https://wdaweb.github.io/')
  .then( {data} ) => {
    const $ = cheerio.load(data)
    console.log*('#go .col-lg-3-md-6').eq(3).find('.card-description').text().trim().replace(/\t/g, '')
  }
