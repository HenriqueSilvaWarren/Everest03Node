import express from 'express';
import { customContainer } from '../di';
import { Routes } from './Routes';
import dotenv from 'dotenv';

dotenv.config({path: '../../variables.env'});

const routes: Routes = customContainer.resolve(Routes);
const app = express();

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use(routes.setupRouter());

export default app;