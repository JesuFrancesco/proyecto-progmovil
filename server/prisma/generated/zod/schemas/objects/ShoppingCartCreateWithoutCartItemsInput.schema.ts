import { z } from 'zod';
import { UserCreateNestedOneWithoutShoppingCartsInputObjectSchema } from './UserCreateNestedOneWithoutShoppingCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartCreateWithoutCartItemsInput> = z
  .object({
    user: z.lazy(
      () => UserCreateNestedOneWithoutShoppingCartsInputObjectSchema,
    ),
  })
  .strict();

export const ShoppingCartCreateWithoutCartItemsInputObjectSchema = Schema;
