import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { CartItemListRelationFilterObjectSchema } from './CartItemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ShoppingCartWhereInputObjectSchema),
        z.lazy(() => ShoppingCartWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ShoppingCartWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ShoppingCartWhereInputObjectSchema),
        z.lazy(() => ShoppingCartWhereInputObjectSchema).array(),
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
    cartItems: z.lazy(() => CartItemListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ShoppingCartWhereInputObjectSchema = Schema;
