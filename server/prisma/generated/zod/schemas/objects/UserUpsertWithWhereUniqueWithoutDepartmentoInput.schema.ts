import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutDepartmentoInputObjectSchema } from './UserUpdateWithoutDepartmentoInput.schema';
import { UserUncheckedUpdateWithoutDepartmentoInputObjectSchema } from './UserUncheckedUpdateWithoutDepartmentoInput.schema';
import { UserCreateWithoutDepartmentoInputObjectSchema } from './UserCreateWithoutDepartmentoInput.schema';
import { UserUncheckedCreateWithoutDepartmentoInputObjectSchema } from './UserUncheckedCreateWithoutDepartmentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutDepartmentoInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutDepartmentoInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutDepartmentoInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutDepartmentoInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutDepartmentoInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutDepartmentoInputObjectSchema =
  Schema;
