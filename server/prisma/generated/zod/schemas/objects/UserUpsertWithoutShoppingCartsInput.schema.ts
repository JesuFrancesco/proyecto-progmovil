import { z } from 'zod';
import { UserUpdateWithoutShoppingCartsInputObjectSchema } from './UserUpdateWithoutShoppingCartsInput.schema';
import { UserUncheckedUpdateWithoutShoppingCartsInputObjectSchema } from './UserUncheckedUpdateWithoutShoppingCartsInput.schema';
import { UserCreateWithoutShoppingCartsInputObjectSchema } from './UserCreateWithoutShoppingCartsInput.schema';
import { UserUncheckedCreateWithoutShoppingCartsInputObjectSchema } from './UserUncheckedCreateWithoutShoppingCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutShoppingCartsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutShoppingCartsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutShoppingCartsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutShoppingCartsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutShoppingCartsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutShoppingCartsInputObjectSchema = Schema;
