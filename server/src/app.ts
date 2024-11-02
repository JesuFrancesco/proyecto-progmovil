import { specs } from "./swagger";
import swaggerUi from "swagger-ui-express";
import express from "express";
import cors from "cors";
import boom from "@hapi/boom";
import {
  errorHandler,
  logErrores,
  prismaClientValidationErrorHandler,
  boomErrorHandler,
} from "./middleware/error.handler";
import API_ROUTER from "./router";
import { config, logger } from "./config";

const API_PREFIX = "/api/v1";

export const app = express();

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

// == Swagger definition
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

// == Express JSON Middleware
app.use(express.json());
app.use(
  cors({
    origin: config.originAddress,
    optionsSuccessStatus: 200,
  })
);

// == Prisma Express Router
// routerAPI(app);
app.use(API_PREFIX, API_ROUTER);

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
