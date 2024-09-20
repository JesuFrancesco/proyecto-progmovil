import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutDistritoInputObjectSchema } from './UserUpdateWithoutDistritoInput.schema';
import { UserUncheckedUpdateWithoutDistritoInputObjectSchema } from './UserUncheckedUpdateWithoutDistritoInput.schema';
import { UserCreateWithoutDistritoInputObjectSchema } from './UserCreateWithoutDistritoInput.schema';
import { UserUncheckedCreateWithoutDistritoInputObjectSchema } from './UserUncheckedCreateWithoutDistritoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutDistritoInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutDistritoInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutDistritoInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutDistritoInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutDistritoInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutDistritoInputObjectSchema = Schema;
