import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BrandSellerMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    countryOrigin: z.literal(true).optional(),
    referenceLocation: z.literal(true).optional(),
    countryId: z.literal(true).optional(),
  })
  .strict();

export const BrandSellerMinAggregateInputObjectSchema = Schema;
