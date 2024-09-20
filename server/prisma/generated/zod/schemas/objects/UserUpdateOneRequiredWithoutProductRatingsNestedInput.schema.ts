import { z } from 'zod';
import { UserCreateWithoutProductRatingsInputObjectSchema } from './UserCreateWithoutProductRatingsInput.schema';
import { UserUncheckedCreateWithoutProductRatingsInputObjectSchema } from './UserUncheckedCreateWithoutProductRatingsInput.schema';
import { UserCreateOrConnectWithoutProductRatingsInputObjectSchema } from './UserCreateOrConnectWithoutProductRatingsInput.schema';
import { UserUpsertWithoutProductRatingsInputObjectSchema } from './UserUpsertWithoutProductRatingsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutProductRatingsInputObjectSchema } from './UserUpdateWithoutProductRatingsInput.schema';
import { UserUncheckedUpdateWithoutProductRatingsInputObjectSchema } from './UserUncheckedUpdateWithoutProductRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutProductRatingsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutProductRatingsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutProductRatingsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutProductRatingsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutProductRatingsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutProductRatingsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutProductRatingsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutProductRatingsNestedInputObjectSchema =
  Schema;
