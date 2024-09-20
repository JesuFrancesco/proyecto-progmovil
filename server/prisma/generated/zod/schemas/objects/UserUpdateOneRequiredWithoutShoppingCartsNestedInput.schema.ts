import { z } from 'zod';
import { UserCreateWithoutShoppingCartsInputObjectSchema } from './UserCreateWithoutShoppingCartsInput.schema';
import { UserUncheckedCreateWithoutShoppingCartsInputObjectSchema } from './UserUncheckedCreateWithoutShoppingCartsInput.schema';
import { UserCreateOrConnectWithoutShoppingCartsInputObjectSchema } from './UserCreateOrConnectWithoutShoppingCartsInput.schema';
import { UserUpsertWithoutShoppingCartsInputObjectSchema } from './UserUpsertWithoutShoppingCartsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutShoppingCartsInputObjectSchema } from './UserUpdateWithoutShoppingCartsInput.schema';
import { UserUncheckedUpdateWithoutShoppingCartsInputObjectSchema } from './UserUncheckedUpdateWithoutShoppingCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutShoppingCartsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutShoppingCartsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutShoppingCartsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutShoppingCartsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutShoppingCartsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutShoppingCartsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutShoppingCartsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutShoppingCartsNestedInputObjectSchema =
  Schema;
