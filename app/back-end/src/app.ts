import express from 'express';
import UserRouter from './Routes/UserRoute';
import CarRouter from './Routes/CarRoute';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRouter);
app.use(CarRouter);

export default app;