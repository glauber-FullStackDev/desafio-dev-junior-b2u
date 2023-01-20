import fastify from "fastify";
import cors from "@fastify/cors";
import connectDB from "./database/config";
import { appRoutes } from "./routes";

const app = fastify();
connectDB();

/*
* Permitindo chamada de todas as origens somente para fins de teste
*/
app.register(cors);
app.register(appRoutes);

app.listen({
    port: 9901,
}).then(() => {
    console.log("Server is runing on port 9901");
});