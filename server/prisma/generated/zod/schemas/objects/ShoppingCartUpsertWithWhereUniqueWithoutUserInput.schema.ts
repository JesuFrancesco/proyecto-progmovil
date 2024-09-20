import { z } from 'zod';
import { ShoppingCartWhereUniqueInputObjectSchema } from './ShoppingCartWhereUniqueInput.schema';
import { ShoppingCartUpdateWithoutUserInputObjectSchema } from './ShoppingCartUpdateWithoutUserInput.schema';
import { ShoppingCartUncheckedUpdateWithoutUserInputObjectSchema } from './ShoppingCartUncheckedUpdateWithoutUserInput.schema';
import { ShoppingCartCreateWithoutUserInputObjectSchema } from './ShoppingCartCreateWithoutUserInput.schema';
import { ShoppingCartUncheckedCreateWithoutUserInputObjectSchema } from './ShoppingCartUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ShoppingCartWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ShoppingCartUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ShoppingCartUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ShoppingCartCreateWithoutUserInputObjectSchema),
        z.lazy(() => ShoppingCartUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ShoppingCartUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
