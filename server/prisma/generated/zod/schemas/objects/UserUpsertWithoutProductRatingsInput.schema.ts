import { z } from 'zod';
import { UserUpdateWithoutProductRatingsInputObjectSchema } from './UserUpdateWithoutProductRatingsInput.schema';
import { UserUncheckedUpdateWithoutProductRatingsInputObjectSchema } from './UserUncheckedUpdateWithoutProductRatingsInput.schema';
import { UserCreateWithoutProductRatingsInputObjectSchema } from './UserCreateWithoutProductRatingsInput.schema';
import { UserUncheckedCreateWithoutProductRatingsInputObjectSchema } from './UserUncheckedCreateWithoutProductRatingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutProductRatingsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutProductRatingsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutProductRatingsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutProductRatingsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutProductRatingsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutProductRatingsInputObjectSchema = Schema;
