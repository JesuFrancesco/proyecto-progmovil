import { z } from 'zod';
import { UserCreateWithoutProductRatingsInputObjectSchema } from './UserCreateWithoutProductRatingsInput.schema';
import { UserUncheckedCreateWithoutProductRatingsInputObjectSchema } from './UserUncheckedCreateWithoutProductRatingsInput.schema';
import { UserCreateOrConnectWithoutProductRatingsInputObjectSchema } from './UserCreateOrConnectWithoutProductRatingsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutProductRatingsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutProductRatingsInputObjectSchema = Schema;
