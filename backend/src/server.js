const express = require("express");
const cors = require("cors");
const Routes = require("./todos.routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(Routes);

app.listen(3333, () => console.log("Server up in 3333"));
