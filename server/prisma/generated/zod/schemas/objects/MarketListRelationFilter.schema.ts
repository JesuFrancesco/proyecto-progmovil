import { z } from 'zod';
import { MarketWhereInputObjectSchema } from './MarketWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketListRelationFilter> = z
  .object({
    every: z.lazy(() => MarketWhereInputObjectSchema).optional(),
    some: z.lazy(() => MarketWhereInputObjectSchema).optional(),
    none: z.lazy(() => MarketWhereInputObjectSchema).optional(),
  })
  .strict();

export const MarketListRelationFilterObjectSchema = Schema;
