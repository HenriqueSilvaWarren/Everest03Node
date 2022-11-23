import express from 'express';
import { router, customerRouter } from './presentation/Routes';

const app = express();

app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());

app.use("/", router);
app.use("/customer", customerRouter);

app.listen(3000);