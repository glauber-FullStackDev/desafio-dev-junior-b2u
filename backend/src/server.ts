import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { routerCar } from "./routes/routeCars";
import { routerBrand } from "./routes/brandsRoutes";

const app = express();
const PORT = 4003;

app.route("/").get((req: Request, res: Response) => {
  res.status(200).send({ title: "car sale" });
});

app.use(express.json(), routerCar, routerBrand, cors());

app.listen(PORT, () => console.log("Server is running on PORT 4003"));
