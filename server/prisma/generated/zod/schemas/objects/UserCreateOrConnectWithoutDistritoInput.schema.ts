import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDistritoInputObjectSchema } from './UserCreateWithoutDistritoInput.schema';
import { UserUncheckedCreateWithoutDistritoInputObjectSchema } from './UserUncheckedCreateWithoutDistritoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutDistritoInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutDistritoInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDistritoInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutDistritoInputObjectSchema = Schema;
