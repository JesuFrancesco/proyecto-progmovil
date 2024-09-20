import { z } from 'zod';
import { ShoppingCartCreateWithoutCartItemsInputObjectSchema } from './ShoppingCartCreateWithoutCartItemsInput.schema';
import { ShoppingCartUncheckedCreateWithoutCartItemsInputObjectSchema } from './ShoppingCartUncheckedCreateWithoutCartItemsInput.schema';
import { ShoppingCartCreateOrConnectWithoutCartItemsInputObjectSchema } from './ShoppingCartCreateOrConnectWithoutCartItemsInput.schema';
import { ShoppingCartWhereUniqueInputObjectSchema } from './ShoppingCartWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartCreateNestedOneWithoutCartItemsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ShoppingCartCreateWithoutCartItemsInputObjectSchema),
          z.lazy(
            () => ShoppingCartUncheckedCreateWithoutCartItemsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ShoppingCartCreateOrConnectWithoutCartItemsInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => ShoppingCartWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const ShoppingCartCreateNestedOneWithoutCartItemsInputObjectSchema =
  Schema;
