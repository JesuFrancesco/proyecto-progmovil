import { z } from 'zod';
import { ShoppingCartWhereUniqueInputObjectSchema } from './ShoppingCartWhereUniqueInput.schema';
import { ShoppingCartUpdateWithoutUserInputObjectSchema } from './ShoppingCartUpdateWithoutUserInput.schema';
import { ShoppingCartUncheckedUpdateWithoutUserInputObjectSchema } from './ShoppingCartUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ShoppingCartWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ShoppingCartUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ShoppingCartUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ShoppingCartUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
