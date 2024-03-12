import express from "express"
import routes from "./api/routes"
import swaggerUi from "swagger-ui-express"
import * as dotenv from "dotenv"
import swaggerJson from "../docs/swagger.json"
import cors from "cors"

dotenv.config({path: "../.env"})

const apiPrefix = process.env.apiPrefix
const app = express();
let port = Number(process.env.API_PORT) || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(`${apiPrefix}${process.env.DOCS_PATH}`,swaggerUi.serve,swaggerUi.setup(swaggerJson))

const main = () => {
    app.listen(port)
        .on("listening", () => {
            console.log(`Server is running on port ${port}`);
            console.log(`Swagger UI is available at http://0.0.0.0:${port}${apiPrefix}${process.env.DOCS_PATH}`);
        })
        .on("error", () => {
            console.error(`Port ${port} is already in use trying another one...`)
            port++
            main()
        })
}

main()
