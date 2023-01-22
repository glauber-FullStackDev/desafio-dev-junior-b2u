import express, { NextFunction, Request, Response } from "express";

import cors from "cors";

import { router } from "./src/routes/cars.routes";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/car", router);


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    });
  }

  return res.status(500).json({
    status: "Error",
    message: "Internal Server Error"
  });
});


app.listen(3333, () => console.log("SERVER ON"));

