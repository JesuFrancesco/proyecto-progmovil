import { z } from 'zod';
import { UserCreateWithoutDistritoInputObjectSchema } from './UserCreateWithoutDistritoInput.schema';
import { UserUncheckedCreateWithoutDistritoInputObjectSchema } from './UserUncheckedCreateWithoutDistritoInput.schema';
import { UserCreateOrConnectWithoutDistritoInputObjectSchema } from './UserCreateOrConnectWithoutDistritoInput.schema';
import { UserUpsertWithWhereUniqueWithoutDistritoInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutDistritoInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutDistritoInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutDistritoInput.schema';
import { UserUpdateManyWithWhereWithoutDistritoInputObjectSchema } from './UserUpdateManyWithWhereWithoutDistritoInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutDistritoNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => UserUpsertWithWhereUniqueWithoutDistritoInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUpsertWithWhereUniqueWithoutDistritoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => UserUpdateWithWhereUniqueWithoutDistritoInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUpdateWithWhereUniqueWithoutDistritoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => UserUpdateManyWithWhereWithoutDistritoInputObjectSchema),
          z
            .lazy(() => UserUpdateManyWithWhereWithoutDistritoInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserScalarWhereInputObjectSchema),
          z.lazy(() => UserScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateManyWithoutDistritoNestedInputObjectSchema =
  Schema;
