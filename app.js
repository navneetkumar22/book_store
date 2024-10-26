import dotenv from 'dotenv';
dotenv.config()

import cors from 'cors';
import bookRoutes from './routes/bookRoutes.js';

import express from 'express';
const app = express();
app.use(cors())

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/', bookRoutes);

export default app;