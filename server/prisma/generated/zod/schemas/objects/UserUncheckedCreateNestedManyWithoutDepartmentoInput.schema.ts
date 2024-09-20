import { z } from 'zod';
import { UserCreateWithoutDepartmentoInputObjectSchema } from './UserCreateWithoutDepartmentoInput.schema';
import { UserUncheckedCreateWithoutDepartmentoInputObjectSchema } from './UserUncheckedCreateWithoutDepartmentoInput.schema';
import { UserCreateOrConnectWithoutDepartmentoInputObjectSchema } from './UserCreateOrConnectWithoutDepartmentoInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutDepartmentoInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutDepartmentoInputObjectSchema),
          z.lazy(() => UserCreateWithoutDepartmentoInputObjectSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutDepartmentoInputObjectSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutDepartmentoInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutDepartmentoInputObjectSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutDepartmentoInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedCreateNestedManyWithoutDepartmentoInputObjectSchema =
  Schema;
