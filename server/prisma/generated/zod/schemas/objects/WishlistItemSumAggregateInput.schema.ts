import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemSumAggregateInputType> = z
  .object({
    wishlistId: z.literal(true).optional(),
    productId: z.literal(true).optional(),
  })
  .strict();

export const WishlistItemSumAggregateInputObjectSchema = Schema;
