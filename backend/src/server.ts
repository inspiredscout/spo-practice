import express from "express"
import swaggerUi from "swagger-ui-express"
import routes from "./api/routes"
import * as dotenv from "dotenv"
dotenv.config()

const app = express();
const port = process.env.API_PORT || 3000;

app.use(express.json());
app.use(routes);
app.use("/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined,{
        swaggerOptions: {
            url: "/swagger.json"
        }
    }))


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
