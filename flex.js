export default {
  type: 'flex',
  altText: '活動',
  contents: {
    type: 'bubble',
    header: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '活動',
          size: 'lg',
          weight: 'bold',
          color: '#FFFFFF'
        }
      ]
    },
    hero: {
      type: 'image',
      url: 'https://data.boch.gov.tw/upload/representImageFile/2017-11-23/5791d8a8-3987-4052-8c19-27c1c1bc84a6/%E9%9B%9E%E7%B1%A0%E4%B8%AD%E5%85%83%E7%A5%AD25.jpg',
      size: 'full',
      offsetBottom: 'none'
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'button',
          action: {
            type: 'message',
            label: '活動介紹',
            text: 'hi'
          },
          style: 'primary',
          color: '#B9B973',
          offsetTop: 'none'
        },
        {
          type: 'button',
          action: {
            type: 'message',
            label: '活動特點',
            text: 'hi'
          },
          style: 'primary',
          color: '#B9B973',
          offsetTop: 'md'
        }
      ]
    },
    styles: {
      header: {
        backgroundColor: '#A6A600'
      }
    }
  }
}
