import { z } from 'zod';
import { MarketProductWhereInputObjectSchema } from './MarketProductWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketProductListRelationFilter> = z
  .object({
    every: z.lazy(() => MarketProductWhereInputObjectSchema).optional(),
    some: z.lazy(() => MarketProductWhereInputObjectSchema).optional(),
    none: z.lazy(() => MarketProductWhereInputObjectSchema).optional(),
  })
  .strict();

export const MarketProductListRelationFilterObjectSchema = Schema;
