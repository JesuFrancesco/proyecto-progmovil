import express from "express";
import cors from "cors";
import boom from "@hapi/boom";
import {
  errorHandler,
  logErrores,
  prismaClientValidationErrorHandler,
  boomErrorHandler,
} from "./middleware/error.handler";
import { routerAPI } from "./router";
import { logger } from "./config";

const app = express();
const port = 8080;

// == Supabase auth
// const supabase = createClient(config.supabaseURL, config.supabaseServiceRole);

// (async () => {
//   const { data } = await supabase.auth.admin.listUsers();
//   console.log(data.users);
// })();

// == Logger | iniciar peticion
app.use((req, res, next) => {
  logger.info(`PETICION INICIADA... | ${req.path}`);
  next();
});

// == Logger | peticion con exito
app.use((req: any, res: any, next: any) => {
  const originalJson = res.json;

  res.json = function (body) {
    if (res.statusCode < 400) {
      logger.info(`PETICION FINALIZADA | STATUS CODE ${res.statusCode}`);
    } else {
      logger.error(`ALGO SALIO MAL | STATUS CODE ${res.statusCode}`);
    }
    originalJson.call(this, body);
  };

  next();
});

// == Root Message
app.get("/", (req, res) => {
  res.send("Hola desde server Express.js");
});

// == Express JSON Middleware
app.use(express.json());
app.use(cors());

// == Prisma Express Router
routerAPI(app);

// Logger: ruta no existe
app.use(function (req, res, next) {
  if (!req.route) {
    logger.error("LA RUTA NO EXISTE | STATUS CODE 404");
    throw boom.notFound();
  }
  next();
});

// == Custom middleware
app.use(boomErrorHandler);
app.use(prismaClientValidationErrorHandler);
app.use(logErrores);
app.use(errorHandler);

// == Entry point
app.listen(port, () => {
  console.log("Servidor iniciado en el puerto:", port);
});
