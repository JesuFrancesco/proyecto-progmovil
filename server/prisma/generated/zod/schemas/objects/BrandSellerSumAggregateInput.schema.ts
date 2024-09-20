import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerSumAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    countryId: z.literal(true).optional(),
  })
  .strict();

export const BrandSellerSumAggregateInputObjectSchema = Schema;
