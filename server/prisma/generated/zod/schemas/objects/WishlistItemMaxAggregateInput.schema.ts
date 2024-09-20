import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemMaxAggregateInputType> = z
  .object({
    addedAt: z.literal(true).optional(),
    wishlistId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const WishlistItemMaxAggregateInputObjectSchema = Schema;
