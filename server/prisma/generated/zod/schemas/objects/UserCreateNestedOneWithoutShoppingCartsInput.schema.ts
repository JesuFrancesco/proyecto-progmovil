import { z } from 'zod';
import { UserCreateWithoutShoppingCartsInputObjectSchema } from './UserCreateWithoutShoppingCartsInput.schema';
import { UserUncheckedCreateWithoutShoppingCartsInputObjectSchema } from './UserUncheckedCreateWithoutShoppingCartsInput.schema';
import { UserCreateOrConnectWithoutShoppingCartsInputObjectSchema } from './UserCreateOrConnectWithoutShoppingCartsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutShoppingCartsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutShoppingCartsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutShoppingCartsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutShoppingCartsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutShoppingCartsInputObjectSchema = Schema;
