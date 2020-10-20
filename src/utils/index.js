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
  }
}
