import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutProvinciaInputObjectSchema } from './UserUpdateWithoutProvinciaInput.schema';
import { UserUncheckedUpdateWithoutProvinciaInputObjectSchema } from './UserUncheckedUpdateWithoutProvinciaInput.schema';
import { UserCreateWithoutProvinciaInputObjectSchema } from './UserCreateWithoutProvinciaInput.schema';
import { UserUncheckedCreateWithoutProvinciaInputObjectSchema } from './UserUncheckedCreateWithoutProvinciaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutProvinciaInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutProvinciaInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutProvinciaInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutProvinciaInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutProvinciaInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutProvinciaInputObjectSchema =
  Schema;
