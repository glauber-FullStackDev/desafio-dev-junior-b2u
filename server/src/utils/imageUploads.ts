import { randomUUID } from 'crypto'
import multer from 'multer'
import path from 'path'
import { Error } from '../interfaces/Error'

const configs = multer.diskStorage({
    destination: (req, file, cb) =>  cb(null, path.resolve(__dirname, '../uploads')),
    filename: (req, file, cb) => {
        cb(null, randomUUID() + path.extname(file.originalname))
    }
})

const imageUpload = multer({
    storage: configs,
})

export {
    imageUpload
}
