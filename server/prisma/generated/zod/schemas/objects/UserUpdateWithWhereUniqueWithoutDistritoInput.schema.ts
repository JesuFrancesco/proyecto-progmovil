import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutDistritoInputObjectSchema } from './UserUpdateWithoutDistritoInput.schema';
import { UserUncheckedUpdateWithoutDistritoInputObjectSchema } from './UserUncheckedUpdateWithoutDistritoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutDistritoInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutDistritoInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutDistritoInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutDistritoInputObjectSchema = Schema;
