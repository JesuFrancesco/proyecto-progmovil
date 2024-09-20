import { z } from 'zod';
import { ShoppingCartCreateWithoutUserInputObjectSchema } from './ShoppingCartCreateWithoutUserInput.schema';
import { ShoppingCartUncheckedCreateWithoutUserInputObjectSchema } from './ShoppingCartUncheckedCreateWithoutUserInput.schema';
import { ShoppingCartCreateOrConnectWithoutUserInputObjectSchema } from './ShoppingCartCreateOrConnectWithoutUserInput.schema';
import { ShoppingCartWhereUniqueInputObjectSchema } from './ShoppingCartWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ShoppingCartCreateWithoutUserInputObjectSchema),
          z.lazy(() => ShoppingCartCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => ShoppingCartUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ShoppingCartUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ShoppingCartCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => ShoppingCartCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ShoppingCartWhereUniqueInputObjectSchema),
          z.lazy(() => ShoppingCartWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ShoppingCartUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
