import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WishlistOrderByWithRelationInputObjectSchema } from './WishlistOrderByWithRelationInput.schema';
import { ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemOrderByWithRelationInput> = z
  .object({
    addedAt: z.lazy(() => SortOrderSchema).optional(),
    wishlistId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    wishlist: z
      .lazy(() => WishlistOrderByWithRelationInputObjectSchema)
      .optional(),
    product: z
      .lazy(() => ProductOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const WishlistItemOrderByWithRelationInputObjectSchema = Schema;
