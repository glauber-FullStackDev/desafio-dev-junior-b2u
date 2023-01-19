

import express,{Application} from 'express';

const app:Application = express();

app.use(express.json());

app.listen(3000,()=>{
    console.log('listen')
});
 


