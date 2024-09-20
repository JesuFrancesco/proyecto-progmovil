import { z } from 'zod';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { WishlistRelationFilterObjectSchema } from './WishlistRelationFilter.schema';
import { WishlistWhereInputObjectSchema } from './WishlistWhereInput.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => WishlistItemWhereInputObjectSchema),
        z.lazy(() => WishlistItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => WishlistItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => WishlistItemWhereInputObjectSchema),
        z.lazy(() => WishlistItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    addedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    wishlistId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    productId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    wishlist: z
      .union([
        z.lazy(() => WishlistRelationFilterObjectSchema),
        z.lazy(() => WishlistWhereInputObjectSchema),
      ])
      .optional(),
    product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const WishlistItemWhereInputObjectSchema = Schema;
