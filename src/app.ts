import express from 'express';
import bodyparser from 'body-parser';
import indexRoute from './routes/indexRoute';
import partialRoute from './routes/partialRoute';
import MongoDB from './services/MongoDB';
import dotenv from "dotenv";

dotenv.config();
MongoDB.conectar(process.env.URL_BANCO || "")? console.log('conectado') : console.log('Erro ao conectar');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use('/',indexRoute);
app.use('/partial',partialRoute);


export default app;
