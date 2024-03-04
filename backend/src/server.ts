import routes from "./api/routes"
import swaggerUi from "swagger-ui-express"
import * as dotenv from "dotenv"
import express from "express";
import swaggerJson from "../docs/swagger.json"

dotenv.config()


const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());
app.use(routes);
app.use("/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerJson))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});