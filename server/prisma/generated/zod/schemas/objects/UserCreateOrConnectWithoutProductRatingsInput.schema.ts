import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutProductRatingsInputObjectSchema } from './UserCreateWithoutProductRatingsInput.schema';
import { UserUncheckedCreateWithoutProductRatingsInputObjectSchema } from './UserUncheckedCreateWithoutProductRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutProductRatingsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutProductRatingsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutProductRatingsInputObjectSchema),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutProductRatingsInputObjectSchema = Schema;
