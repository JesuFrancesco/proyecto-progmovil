import { Express, NextFunction } from "express";
import { AccountRouter } from "../../prisma/generated/express/Account";
import { UserRouter } from "../../prisma/generated/express/User";
import { ProductRouter } from "../../prisma/generated/express/Product";
import { MarketRouter } from "../../prisma/generated/express/Market";
import { PrismaClient } from "@prisma/client";

// import authRouter from "./auth.router";
// import profileRouter from "./profile.router";

function routerAPI(app: Express) {
  const prisma = new PrismaClient();

  const addPrisma = (req: any, res: any, next: NextFunction) => {
    req.prisma = prisma;
    next();
  };

  app.use(addPrisma);
  app.use(
    AccountRouter({
      addModelPrefix: true,
      enableAll: true,
      customUrlPrefix: "/v1",
    })
  );
  app.use(
    UserRouter({
      addModelPrefix: true,
      enableAll: true,
      customUrlPrefix: "/v1",
    })
  );
  app.use(
    ProductRouter({
      addModelPrefix: true,
      enableAll: true,
      customUrlPrefix: "/v1",
    })
  );
  app.use(
    MarketRouter({
      addModelPrefix: true,
      enableAll: true,
      customUrlPrefix: "/v1",
    })
  );
  app.use(
    AccountRouter({
      addModelPrefix: true,
      enableAll: true,
      customUrlPrefix: "/v1",
    })
  );

  // router.use("/products", ProductRouter);
  // router.use("/users", UserRouter);
  // router.use("/markets", MarketRouter);
  // router.use("/category", categoryRouter);
  // router.use("/order", orderRouter);

  // router.use("/auth", authRouter);
  // router.use("/profile", profileRouter);
}

export { routerAPI };
