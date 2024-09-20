import { z } from 'zod';
import { ShoppingCartWhereUniqueInputObjectSchema } from './ShoppingCartWhereUniqueInput.schema';
import { ShoppingCartCreateWithoutUserInputObjectSchema } from './ShoppingCartCreateWithoutUserInput.schema';
import { ShoppingCartUncheckedCreateWithoutUserInputObjectSchema } from './ShoppingCartUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ShoppingCartCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ShoppingCartWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ShoppingCartCreateWithoutUserInputObjectSchema),
      z.lazy(() => ShoppingCartUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ShoppingCartCreateOrConnectWithoutUserInputObjectSchema = Schema;
