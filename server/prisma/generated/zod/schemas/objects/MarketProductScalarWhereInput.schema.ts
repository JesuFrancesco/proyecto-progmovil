import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MarketProductScalarWhereInputObjectSchema),
        z.lazy(() => MarketProductScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MarketProductScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MarketProductScalarWhereInputObjectSchema),
        z.lazy(() => MarketProductScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    marketId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    productId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const MarketProductScalarWhereInputObjectSchema = Schema;
