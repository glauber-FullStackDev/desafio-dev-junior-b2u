import cors from "cors";

import express from "express";
import { routes } from "./routes";




const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);

if (process.env.NODE_ENV === "production") {
  server.use(express.static("front-end/dist"));
  //app.use('/', express.static(path.join(__dirname, 'html')));

  const path = require("path");
  server.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "fron-tend", "dist","assets", "index.html"));
  });
}

export { server };