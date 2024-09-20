import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemMinAggregateInputType> = z
  .object({
    addedAt: z.literal(true).optional(),
    wishlistId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const WishlistItemMinAggregateInputObjectSchema = Schema;
