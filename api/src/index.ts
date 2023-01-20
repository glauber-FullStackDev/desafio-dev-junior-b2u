import 'express-async-errors'
import express, { Request, Response } from 'express'
import 'dotenv/config'
import cors from 'cors'
import { loginRouter } from './routers/loginRouter'
import errorHandler from './helpers/errorHandler'
import { carRouter } from './routers/carRouter'
import { userRouter } from './routers/userRouter'
import { storage } from './helpers/multerConfig'
import multer from 'multer'

const port = process.env.PORT

const app = express()

const upload = multer({ storage })

app.use(express.json())
app.use(cors())

app.use('/images', express.static('upload'))

app.post('/uploadImage', upload.single('image'), (req: Request, res: Response) => {
  return res.status(200).json(req.file?.filename)
})
app.use('/login', loginRouter)
app.use('/user', userRouter)
app.use('/car', carRouter)

app.use(errorHandler)

app.listen(port, () => console.log('online on port' + port))
