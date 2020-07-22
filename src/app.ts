import express from 'express';
import bodyparser from 'body-parser';
import index from './routes'



const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use('/',index);


export default app;
