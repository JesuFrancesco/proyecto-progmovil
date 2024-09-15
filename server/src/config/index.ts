import dotenv from "dotenv";
import * as log4js from "log4js";

// env
dotenv.config();

// logger
log4js.configure({
  appenders: { consola: { type: "console" } },
  categories: { default: { appenders: ["consola"], level: "info" } },
});

const logger = log4js.getLogger("cheese");

const config = {
  env: process.env.NODE_ENV || "dev",

  dbEngine: process.env.DATABASE_ENGINE as string,
  dbHost: process.env.DATABASE_HOST as string,
  dbPort: process.env.DATABASE_PORT || 5432,
  dbName: process.env.DATABASE_NAME as string,
  dbUser: process.env.DATABASE_USER as string,
  dbPasswd: process.env.DATABASE_PASSWORD as string,

  smtpEmail: process.env.SMTP_EMAIL as string,
  smtpPassword: process.env.SMTP_PASSWORD as string,

  jwtSecret: process.env.JWT_SECRET as string,
};

export { config, logger };
