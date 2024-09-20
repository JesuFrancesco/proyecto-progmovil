import { z } from 'zod';
import { ShoppingCartCreateWithoutCartItemsInputObjectSchema } from './ShoppingCartCreateWithoutCartItemsInput.schema';
import { ShoppingCartUncheckedCreateWithoutCartItemsInputObjectSchema } from './ShoppingCartUncheckedCreateWithoutCartItemsInput.schema';
import { ShoppingCartCreateOrConnectWithoutCartItemsInputObjectSchema } from './ShoppingCartCreateOrConnectWithoutCartItemsInput.schema';
import { ShoppingCartUpsertWithoutCartItemsInputObjectSchema } from './ShoppingCartUpsertWithoutCartItemsInput.schema';
import { ShoppingCartWhereUniqueInputObjectSchema } from './ShoppingCartWhereUniqueInput.schema';
import { ShoppingCartUpdateWithoutCartItemsInputObjectSchema } from './ShoppingCartUpdateWithoutCartItemsInput.schema';
import { ShoppingCartUncheckedUpdateWithoutCartItemsInputObjectSchema } from './ShoppingCartUncheckedUpdateWithoutCartItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartUpdateOneRequiredWithoutCartItemsNestedInput> =
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
      upsert: z
        .lazy(() => ShoppingCartUpsertWithoutCartItemsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => ShoppingCartWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => ShoppingCartUpdateWithoutCartItemsInputObjectSchema),
          z.lazy(
            () => ShoppingCartUncheckedUpdateWithoutCartItemsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ShoppingCartUpdateOneRequiredWithoutCartItemsNestedInputObjectSchema =
  Schema;
