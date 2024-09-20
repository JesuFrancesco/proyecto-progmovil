import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutShoppingCartsInputObjectSchema } from './UserCreateWithoutShoppingCartsInput.schema';
import { UserUncheckedCreateWithoutShoppingCartsInputObjectSchema } from './UserUncheckedCreateWithoutShoppingCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutShoppingCartsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutShoppingCartsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutShoppingCartsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutShoppingCartsInputObjectSchema = Schema;
