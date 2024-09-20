import { z } from 'zod';
import { ShoppingCartUpdateWithoutCartItemsInputObjectSchema } from './ShoppingCartUpdateWithoutCartItemsInput.schema';
import { ShoppingCartUncheckedUpdateWithoutCartItemsInputObjectSchema } from './ShoppingCartUncheckedUpdateWithoutCartItemsInput.schema';
import { ShoppingCartCreateWithoutCartItemsInputObjectSchema } from './ShoppingCartCreateWithoutCartItemsInput.schema';
import { ShoppingCartUncheckedCreateWithoutCartItemsInputObjectSchema } from './ShoppingCartUncheckedCreateWithoutCartItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartUpsertWithoutCartItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ShoppingCartUpdateWithoutCartItemsInputObjectSchema),
      z.lazy(
        () => ShoppingCartUncheckedUpdateWithoutCartItemsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ShoppingCartCreateWithoutCartItemsInputObjectSchema),
      z.lazy(
        () => ShoppingCartUncheckedCreateWithoutCartItemsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ShoppingCartUpsertWithoutCartItemsInputObjectSchema = Schema;
