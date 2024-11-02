import { Express, NextFunction, Router } from "express";
import { PrismaClient } from "@prisma/client";

import { ProfileRouter } from "../generated/express/Profile";
import { ClientRouter } from "../generated/express/Client";
import { MarketRouter } from "../generated/express/Market";
import { ProductRouter } from "../generated/express/Product";
import { NotificationRouter } from "../generated/express/Notification";
import { ProductRatingRouter } from "../generated/express/ProductRating";

import { RouteConfig } from "../generated/express/routeConfig";
import { TagRouter } from "../generated/express/Tag";

const API_ROUTER = Router();

// prisma init
const prisma = new PrismaClient();

// custom express + prisma middleware
const addPrisma = (req: any, res: any, next: NextFunction) => {
  req.prisma = prisma;
  next();
};

API_ROUTER.use(addPrisma);

const commonRouterConfig: RouteConfig<any> = {
  addModelPrefix: true,
  enableAll: true,
};

// routers habilitados
API_ROUTER.use(ProfileRouter(commonRouterConfig));

API_ROUTER.use(ClientRouter(commonRouterConfig));

API_ROUTER.use(MarketRouter(commonRouterConfig));

API_ROUTER.use(ProductRatingRouter(commonRouterConfig));

API_ROUTER.use(ProductRouter(commonRouterConfig));

API_ROUTER.use(TagRouter(commonRouterConfig));

API_ROUTER.use(NotificationRouter(commonRouterConfig));

export = API_ROUTER;
