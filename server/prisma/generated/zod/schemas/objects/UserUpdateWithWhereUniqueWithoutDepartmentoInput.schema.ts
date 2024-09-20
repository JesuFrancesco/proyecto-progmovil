import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutDepartmentoInputObjectSchema } from './UserUpdateWithoutDepartmentoInput.schema';
import { UserUncheckedUpdateWithoutDepartmentoInputObjectSchema } from './UserUncheckedUpdateWithoutDepartmentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutDepartmentoInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutDepartmentoInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutDepartmentoInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutDepartmentoInputObjectSchema =
  Schema;
