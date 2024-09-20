import { z } from 'zod';
import { CartItemCreateWithoutProductInputObjectSchema } from './CartItemCreateWithoutProductInput.schema';
import { CartItemUncheckedCreateWithoutProductInputObjectSchema } from './CartItemUncheckedCreateWithoutProductInput.schema';
import { CartItemCreateOrConnectWithoutProductInputObjectSchema } from './CartItemCreateOrConnectWithoutProductInput.schema';
import { CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartItemCreateNestedManyWithoutProductInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CartItemCreateWithoutProductInputObjectSchema),
        z.lazy(() => CartItemCreateWithoutProductInputObjectSchema).array(),
        z.lazy(() => CartItemUncheckedCreateWithoutProductInputObjectSchema),
        z
          .lazy(() => CartItemUncheckedCreateWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => CartItemCreateOrConnectWithoutProductInputObjectSchema),
        z
          .lazy(() => CartItemCreateOrConnectWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => CartItemWhereUniqueInputObjectSchema),
        z.lazy(() => CartItemWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const CartItemCreateNestedManyWithoutProductInputObjectSchema = Schema;
