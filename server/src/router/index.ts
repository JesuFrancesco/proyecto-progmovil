import { Express, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

import { ProfileRouter } from "../generated/express/Profile";
import { ClientRouter } from "../generated/express/Client";
import { MarketRouter } from "../generated/express/Market";
import { ProductRouter } from "../generated/express/Product";
import { NotificationRouter } from "../generated/express/Notification";

import { RouteConfig } from "../generated/express/routeConfig";
import { TagRouter } from "../generated/express/Tag";

const API_PREFIX = "/api/v1";

function routerAPI(app: Express) {
  // prisma init
  const prisma = new PrismaClient();

  // custom express + prisma middleware
  const addPrisma = (req: any, res: any, next: NextFunction) => {
    req.prisma = prisma;
    next();
  };

  app.use(addPrisma);

  const commonRouterConfig: RouteConfig<any> = {
    addModelPrefix: true,
    enableAll: true,
    customUrlPrefix: API_PREFIX,
  };

  // routers habilitados
  app.use(ProfileRouter(commonRouterConfig));

  app.use(ClientRouter(commonRouterConfig));

  app.use(MarketRouter(commonRouterConfig));

  app.use(ProductRouter(commonRouterConfig));

  app.use(TagRouter(commonRouterConfig));

  app.use(NotificationRouter(commonRouterConfig));
}

export { routerAPI };
