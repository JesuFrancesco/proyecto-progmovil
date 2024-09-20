import { z } from 'zod';
import { UserCreateWithoutProvinciaInputObjectSchema } from './UserCreateWithoutProvinciaInput.schema';
import { UserUncheckedCreateWithoutProvinciaInputObjectSchema } from './UserUncheckedCreateWithoutProvinciaInput.schema';
import { UserCreateOrConnectWithoutProvinciaInputObjectSchema } from './UserCreateOrConnectWithoutProvinciaInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutProvinciaInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutProvinciaInputObjectSchema),
          z.lazy(() => UserCreateWithoutProvinciaInputObjectSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutProvinciaInputObjectSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutProvinciaInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutProvinciaInputObjectSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutProvinciaInputObjectSchema)
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

export const UserUncheckedCreateNestedManyWithoutProvinciaInputObjectSchema =
  Schema;
