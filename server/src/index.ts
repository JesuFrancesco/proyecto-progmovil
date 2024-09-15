import express from "express";
import cors from "cors";
import {
  errorHandler,
  logErrores,
  boomErrorHandler,
} from "./middleware/error.handler";
import { routerAPI } from "./router";

const app = express();
const port = 8080;

// hello world
app.get("/", (req, res) => {
  res.send("hola desde server express.js");
});

// express json middleware
app.use(express.json());
app.use(cors());

// require("./util/auth");

// main router
routerAPI(app);

// custom middleware
app.use(logErrores);
app.use(boomErrorHandler);
app.use(errorHandler);

// entry point
app.listen(port, () => {
  console.log("Servidor iniciado en el puerto:", port);
});
