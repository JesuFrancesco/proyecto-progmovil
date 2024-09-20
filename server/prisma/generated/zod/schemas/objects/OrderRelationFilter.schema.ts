import { z } from 'zod';
import { OrderWhereInputObjectSchema } from './OrderWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderRelationFilter> = z
  .object({
    is: z
      .lazy(() => OrderWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => OrderWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const OrderRelationFilterObjectSchema = Schema;
