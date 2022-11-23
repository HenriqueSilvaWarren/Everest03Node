import express from 'express';
import { router as routes } from './presentation/Routes';

const app = express();

app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());

app.use(routes);

app.listen(3000);