export default {
  // 图片转化base64 callback参数为结果
  toBase64 (src, callback) {
    if (!src) {
      return null
    }
    let maskImage = new Image()
    maskImage.crossOrigin = '*'
    maskImage.src = src

    maskImage.onload = () => {
      let canvas = document.createElement('canvas')
      canvas.width = maskImage.width
      canvas.height = maskImage.height
      let ctx = canvas.getContext('2d')
      ctx.drawImage(maskImage, 0, 0, maskImage.width, maskImage.height)
      let ext = maskImage.src.substring(maskImage.src.lastIndexOf('.') + 1).toLowerCase()
      let dataURL = canvas.toDataURL('image/' + ext)
      callback && callback(dataURL)
    }
  },
  // 日期格式化 date为日期对象--> eg: new Date()
  dateFormat (date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
      }
    }
    return fmt
  }
}
