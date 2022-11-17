const express = require('express');
const bodyParser = require("body-parser");
const routes = require('./presentation/Routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.use(routes)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})