
import express from "express"
import http from "http"
import routes from "./api/routes"
import swaggerUi from "swagger-ui-express"
import * as dotenv from "dotenv"

dotenv.config({path: "../.env"})

const apiPrefix = process.env.apiPrefix
const app = express();
let port = Number(process.env.API_PORT) || 3000;

app.use(express.json());
app.use(routes);
app.use("/api/docs",swaggerUi.serve,swaggerUi.setup(swaggerJson))

const main = () => {
    app.listen(port)
        .on("listening", () => {
            console.log(`Server is running on port ${port}`);
            console.log(`Swagger UI is available at http://0.0.0.0:${port}${apiPrefix}/docs`);
        })
        .on("error", () => {
            console.error(`Port ${port} is already in use trying another one...`)
            port++
            main()
        })
}

main()
