import express from 'express';
import { customContainer } from '../di';
import { Routes } from './Routes';

const routes: Routes = customContainer.resolve(Routes);
const app = express();

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());

app.use(routes.setupRouter());

export default app;