import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MarketProductScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => MarketProductScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MarketProductScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MarketProductScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => MarketProductScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    marketId: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    productId: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const MarketProductScalarWhereWithAggregatesInputObjectSchema = Schema;
