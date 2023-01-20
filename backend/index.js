import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

import CarRoutes from './routes/CarRoutes.mjs'

const app = express();
app.use(cors());
app.use(express.json());


mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://usuario:senha@webcar-processo-seletiv.qzuodyr.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("Conectamos ao banco de dados!")
        app.listen(4000, ()=> {
            console.log('Server rodando')
        })
    })
    .catch((err) => console.log(err));

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(CarRoutes);
