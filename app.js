require('./config/config');

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

const app = express();
/*** 
 ** Conexión a DB
***/
const options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };
mongoose.connect(process.env.URLDB, options).then(
    () => { 
        console.log("Conectado a mongoDB"); 
    },
    err => {
        console.error("DB Connection Error: ", err);
    }
);
/***
 ** Middleware
***/
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*** 
 ** Rutas
***/
app.use('/api', require('./routes/cliente'));
/*** 
** Middleware para vue-react-ng router modo history
***/
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto: ', 3000);
});