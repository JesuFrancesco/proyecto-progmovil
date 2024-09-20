import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemMaxOrderByAggregateInput> = z
  .object({
    addedAt: z.lazy(() => SortOrderSchema).optional(),
    wishlistId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const WishlistItemMaxOrderByAggregateInputObjectSchema = Schema;
