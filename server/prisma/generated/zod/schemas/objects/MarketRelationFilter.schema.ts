import { z } from 'zod';
import { MarketWhereInputObjectSchema } from './MarketWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MarketRelationFilter> = z
  .object({
    is: z
      .lazy(() => MarketWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MarketWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const MarketRelationFilterObjectSchema = Schema;
