import express from "express"
const bodyParser = require('body-parser');
import routes from "./api/routes"
import * as dotenv from "dotenv"
dotenv.config()

const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
