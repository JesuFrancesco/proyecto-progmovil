import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutProvinciaInputObjectSchema } from './UserUpdateWithoutProvinciaInput.schema';
import { UserUncheckedUpdateWithoutProvinciaInputObjectSchema } from './UserUncheckedUpdateWithoutProvinciaInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutProvinciaInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutProvinciaInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutProvinciaInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutProvinciaInputObjectSchema =
  Schema;
