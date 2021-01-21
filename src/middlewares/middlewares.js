import express, { json } from 'express';
import logger from 'morgan';
import cors from 'cors';
import multer from 'multer';
import storage from '../microservices/upload-photo/upload-photo';

// inicialization
const app = express();

// middlewares
app.use(logger('dev'));
app.use(cors());
app.use(json());
app.use(multer({
    storage
}).single('upload-photo'));

export default app;