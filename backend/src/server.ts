import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { routeCar } from "./routes/cars";
import { routeBrands } from "./routes/brands";
import { routeUsers } from "./routes/users";

const app = express();
const PORT = 4003;

app.route("/").get((req: Request, res: Response) => {
  res.status(200).send({ title: "car sale" });
});

app.use(express.json(), routeCar, routeBrands, routeUsers, cors());

app.listen(PORT, () => console.log("Server is running on PORT 4003"));
