import express from "express"
import routes from "./api/routes"
import swaggerUi from "swagger-ui-express"
import * as dotenv from "dotenv"
dotenv.config()

const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());
app.use(routes);
app.use("/api/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined,{
        swaggerOptions: {
            url: "/swagger.json"
        }
    }))

app.use(express.static("../docs"))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
