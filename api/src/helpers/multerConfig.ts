import multer from 'multer'
import path from 'path'

export const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.resolve('images'))
  },
  filename: function (req, file, callback) {
    const time = new Date().getTime()
    callback(null, `${time}_${file.originalname}`)
  }
})
