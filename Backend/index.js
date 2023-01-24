import express from 'express';
import cors from 'cors';
import router from './Routes/router.js';


const app = express()
app.use(cors())
app.use(express.json())

app.use("/", router)
app.listen(4001, function () {
    console.log("Servidor listening")
}
)