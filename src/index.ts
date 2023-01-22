import { server } from "./server/Server";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger.json";

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const port = 3333;

server.listen(port, () => console.log("listening on port ", port));
