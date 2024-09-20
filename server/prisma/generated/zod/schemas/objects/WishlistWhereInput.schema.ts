import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { WishlistItemListRelationFilterObjectSchema } from './WishlistItemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WishlistWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => WishlistWhereInputObjectSchema),
        z.lazy(() => WishlistWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => WishlistWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => WishlistWhereInputObjectSchema),
        z.lazy(() => WishlistWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    userId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    wishlistItems: z
      .lazy(() => WishlistItemListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const WishlistWhereInputObjectSchema = Schema;
