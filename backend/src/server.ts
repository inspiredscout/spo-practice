import express from "express"
import http from "http"
import routes from "./api/routes"
import * as dotenv from "dotenv"

dotenv.config({path: "../.env"})

const app = express();
let port = Number(process.env.API_PORT) || 3000;

app.use(express.json());
app.use(routes);

const main = () => {
    app.listen(port)
        .on("listening", () => {
            console.log(`Server is running on port ${port}`);
        })
        .on("error", () => {
            console.error(`Port ${port} is already in use trying another one...`)
            port++
            main()
        })
}

main()
