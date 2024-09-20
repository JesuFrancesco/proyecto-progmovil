import { PrismaClient } from '@prisma/client'
import { ZodTypeAny } from 'zod'

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