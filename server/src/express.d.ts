import { PrismaClient } from '@prisma/client'
import { ZodTypeAny } from 'zod'

declare namespace Express {
  interface Request {
    prisma: PrismaClient
  }
}

declare module 'express-serve-static-core' {
  interface Request {
    prisma: PrismaClient
    passToNext?: boolean
    locals?: {
      data?: any
      outputValidator?: ZodTypeAny
    }
  }
}