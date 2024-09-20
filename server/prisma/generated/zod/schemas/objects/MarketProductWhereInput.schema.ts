import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { MarketRelationFilterObjectSchema } from './MarketRelationFilter.schema';
import { MarketWhereInputObjectSchema } from './MarketWhereInput.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MarketProductWhereInputObjectSchema),
        z.lazy(() => MarketProductWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MarketProductWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MarketProductWhereInputObjectSchema),
        z.lazy(() => MarketProductWhereInputObjectSchema).array(),
      ])
      .optional(),
    marketId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    productId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    market: z
      .union([
        z.lazy(() => MarketRelationFilterObjectSchema),
        z.lazy(() => MarketWhereInputObjectSchema),
      ])
      .optional(),
    product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const MarketProductWhereInputObjectSchema = Schema;
