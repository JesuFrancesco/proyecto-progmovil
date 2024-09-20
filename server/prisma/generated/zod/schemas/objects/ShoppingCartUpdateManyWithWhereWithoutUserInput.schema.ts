import { z } from 'zod';
import { ShoppingCartScalarWhereInputObjectSchema } from './ShoppingCartScalarWhereInput.schema';
import { ShoppingCartUpdateManyMutationInputObjectSchema } from './ShoppingCartUpdateManyMutationInput.schema';
import { ShoppingCartUncheckedUpdateManyWithoutShoppingCartsInputObjectSchema } from './ShoppingCartUncheckedUpdateManyWithoutShoppingCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ShoppingCartScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ShoppingCartUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ShoppingCartUncheckedUpdateManyWithoutShoppingCartsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ShoppingCartUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
