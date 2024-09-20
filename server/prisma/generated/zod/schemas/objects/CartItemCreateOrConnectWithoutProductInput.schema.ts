import { z } from 'zod';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemCreateWithoutProductInputObjectSchema } from './CartItemCreateWithoutProductInput.schema';
import { CartItemUncheckedCreateWithoutProductInputObjectSchema } from './CartItemUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CartItemCreateWithoutProductInputObjectSchema),
      z.lazy(() => CartItemUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const CartItemCreateOrConnectWithoutProductInputObjectSchema = Schema;
