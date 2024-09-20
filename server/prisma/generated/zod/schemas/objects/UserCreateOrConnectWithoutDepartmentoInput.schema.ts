import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDepartmentoInputObjectSchema } from './UserCreateWithoutDepartmentoInput.schema';
import { UserUncheckedCreateWithoutDepartmentoInputObjectSchema } from './UserUncheckedCreateWithoutDepartmentoInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutDepartmentoInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutDepartmentoInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDepartmentoInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutDepartmentoInputObjectSchema = Schema;
