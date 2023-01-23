
import cors from 'cors'
import express,{Application} from 'express';
import router from './routes/routes';
const app:Application = express();

app.use(cors())
app.use(express.json());
app.use(router);

app.listen(3000,()=>{
    console.log('listen')
});
 


