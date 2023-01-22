

import express,{Application} from 'express';
import router from './routes/routes';
import cors from 'cors'
const app:Application = express();

app.use(express.json());
app.use(router);
app.use(cors())


app.listen(3000,()=>{
    console.log('listen')
});
 


