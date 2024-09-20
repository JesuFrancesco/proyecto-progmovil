import { z } from 'zod';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithoutProductInputObjectSchema } from './CartItemUpdateWithoutProductInput.schema';
import { CartItemUncheckedUpdateWithoutProductInputObjectSchema } from './CartItemUncheckedUpdateWithoutProductInput.schema';
import { CartItemCreateWithoutProductInputObjectSchema } from './CartItemCreateWithoutProductInput.schema';
import { CartItemUncheckedCreateWithoutProductInputObjectSchema } from './CartItemUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CartItemUpdateWithoutProductInputObjectSchema),
        z.lazy(() => CartItemUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => CartItemCreateWithoutProductInputObjectSchema),
        z.lazy(() => CartItemUncheckedCreateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const CartItemUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
