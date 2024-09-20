import { z } from 'zod';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithoutProductInputObjectSchema } from './CartItemUpdateWithoutProductInput.schema';
import { CartItemUncheckedUpdateWithoutProductInputObjectSchema } from './CartItemUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CartItemUpdateWithoutProductInputObjectSchema),
        z.lazy(() => CartItemUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const CartItemUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
