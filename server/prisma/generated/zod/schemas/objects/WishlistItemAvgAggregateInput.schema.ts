import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemAvgAggregateInputType> = z
  .object({
    wishlistId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const WishlistItemAvgAggregateInputObjectSchema = Schema;
