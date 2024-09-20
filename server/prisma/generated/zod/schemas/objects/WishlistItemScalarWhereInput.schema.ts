import { z } from 'zod';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistItemScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => WishlistItemScalarWhereInputObjectSchema),
        z.lazy(() => WishlistItemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => WishlistItemScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => WishlistItemScalarWhereInputObjectSchema),
        z.lazy(() => WishlistItemScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const WishlistItemScalarWhereInputObjectSchema = Schema;
