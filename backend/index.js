import  express  from "express";
import cors from 'cors';
import bp from 'body-parser';
import CarRoute from './routes/Car.js'
import OwnerRoute from './routes/Owner.js'
const PORT = 3001;

const app = express();
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cors())

app.use("/cars", CarRoute);
app.use("/owners", OwnerRoute);


app.listen(PORT, () => console.log(`Server in ${PORT}`));