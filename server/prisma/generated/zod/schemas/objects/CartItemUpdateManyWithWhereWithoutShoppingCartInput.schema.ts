import { z } from 'zod';
import { CartItemScalarWhereInputObjectSchema } from './CartItemScalarWhereInput.schema';
import { CartItemUpdateManyMutationInputObjectSchema } from './CartItemUpdateManyMutationInput.schema';
import { CartItemUncheckedUpdateManyWithoutCartItemsInputObjectSchema } from './CartItemUncheckedUpdateManyWithoutCartItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemUpdateManyWithWhereWithoutShoppingCartInput> =
  z
    .object({
      where: z.lazy(() => CartItemScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => CartItemUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => CartItemUncheckedUpdateManyWithoutCartItemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const CartItemUpdateManyWithWhereWithoutShoppingCartInputObjectSchema =
  Schema;
