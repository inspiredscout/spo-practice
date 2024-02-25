require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/api/routes');

const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
