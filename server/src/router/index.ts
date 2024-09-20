import { Express, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

import { AccountRouter } from "../../prisma/generated/express/Account";
import { UserRouter } from "../../prisma/generated/express/User";
import { AccountCreateOneSchema } from "../../prisma/generated/zod/schemas/createOneAccount.schema"
import { ProductRouter } from "../../prisma/generated/express/Product";
import { MarketRouter } from "../../prisma/generated/express/Market";

// import authRouter from "./auth.router";
// import profileRouter from "./profile.router";

function routerAPI(app: Express) {
  const API_PREFIX = "/api/v1"
  const prisma = new PrismaClient();

  const addPrisma = (req: any, res: any, next: NextFunction) => {
    req.prisma = prisma;
    next();
  };

  app.use(addPrisma);

  // routers
  app.use(
    AccountRouter({
      // create: {
      //   inputValidator: 
      // },
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

}

export { routerAPI };
