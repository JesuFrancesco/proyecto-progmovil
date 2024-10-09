import { Express, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

import { AccountRouter } from "../generated/express/Account";
import { UserRouter } from "../generated/express/User";
import { ProductRouter } from "../generated/express/Product";
import { MarketRouter } from "../generated/express/Market";
import { NotificationRouter } from "../generated/express/Notification";

// import authRouter from "./auth.router";
// import profileRouter from "./profile.router";

function routerAPI(app: Express) {
  const API_PREFIX = "/api/v1";
  const prisma = new PrismaClient();

  const addPrisma = (req: any, res: any, next: NextFunction) => {
    req.prisma = prisma;
    next();
  };

  app.use(addPrisma);

  // routers
  app.use(
    AccountRouter({
      addModelPrefix: true,
      enableAll: true,
      customUrlPrefix: API_PREFIX,
    })
  );

  app.use(
    UserRouter({
      addModelPrefix: true,
      enableAll: true,
      customUrlPrefix: API_PREFIX,
    })
  );

  app.use(
    ProductRouter({
      addModelPrefix: true,
      enableAll: true,
      customUrlPrefix: API_PREFIX,
    })
  );

  app.use(
    MarketRouter({
      addModelPrefix: true,
      enableAll: true,
      customUrlPrefix: API_PREFIX,
    })
  );

  app.use(
    NotificationRouter({
      addModelPrefix: true,
      enableAll: true,
      customUrlPrefix: API_PREFIX,
    })
  );
}

export { routerAPI };
