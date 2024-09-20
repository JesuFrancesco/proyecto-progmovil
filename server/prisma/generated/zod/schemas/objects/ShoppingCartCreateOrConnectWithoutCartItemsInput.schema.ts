import { z } from 'zod';
import { ShoppingCartWhereUniqueInputObjectSchema } from './ShoppingCartWhereUniqueInput.schema';
import { ShoppingCartCreateWithoutCartItemsInputObjectSchema } from './ShoppingCartCreateWithoutCartItemsInput.schema';
import { ShoppingCartUncheckedCreateWithoutCartItemsInputObjectSchema } from './ShoppingCartUncheckedCreateWithoutCartItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartCreateOrConnectWithoutCartItemsInput> =
  z
    .object({
      where: z.lazy(() => ShoppingCartWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ShoppingCartCreateWithoutCartItemsInputObjectSchema),
        z.lazy(
          () => ShoppingCartUncheckedCreateWithoutCartItemsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ShoppingCartCreateOrConnectWithoutCartItemsInputObjectSchema =
  Schema;
