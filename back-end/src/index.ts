import 'express-async-errors'
import app from "./controller/app";
import errorMiddleware from "./middleware/error";
import { routeVehicle } from "./routes/routerVehicle";

app.use("/vehicles",routeVehicle)

app.use(errorMiddleware)