import { z } from 'zod';
import { UserCreateWithoutDistritoInputObjectSchema } from './UserCreateWithoutDistritoInput.schema';
import { UserUncheckedCreateWithoutDistritoInputObjectSchema } from './UserUncheckedCreateWithoutDistritoInput.schema';
import { UserCreateOrConnectWithoutDistritoInputObjectSchema } from './UserCreateOrConnectWithoutDistritoInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutDistritoInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutDistritoInputObjectSchema),
          z.lazy(() => UserCreateWithoutDistritoInputObjectSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutDistritoInputObjectSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutDistritoInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutDistritoInputObjectSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutDistritoInputObjectSchema)
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

export const UserUncheckedCreateNestedManyWithoutDistritoInputObjectSchema =
  Schema;
