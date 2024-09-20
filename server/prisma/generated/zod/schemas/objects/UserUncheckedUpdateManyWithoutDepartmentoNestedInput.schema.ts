import { z } from 'zod';
import { UserCreateWithoutDepartmentoInputObjectSchema } from './UserCreateWithoutDepartmentoInput.schema';
import { UserUncheckedCreateWithoutDepartmentoInputObjectSchema } from './UserUncheckedCreateWithoutDepartmentoInput.schema';
import { UserCreateOrConnectWithoutDepartmentoInputObjectSchema } from './UserCreateOrConnectWithoutDepartmentoInput.schema';
import { UserUpsertWithWhereUniqueWithoutDepartmentoInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutDepartmentoInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutDepartmentoInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutDepartmentoInput.schema';
import { UserUpdateManyWithWhereWithoutDepartmentoInputObjectSchema } from './UserUpdateManyWithWhereWithoutDepartmentoInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutDepartmentoNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => UserUpsertWithWhereUniqueWithoutDepartmentoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUpsertWithWhereUniqueWithoutDepartmentoInputObjectSchema,
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
            () => UserUpdateWithWhereUniqueWithoutDepartmentoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserUpdateWithWhereUniqueWithoutDepartmentoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => UserUpdateManyWithWhereWithoutDepartmentoInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUpdateManyWithWhereWithoutDepartmentoInputObjectSchema,
            )
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

export const UserUncheckedUpdateManyWithoutDepartmentoNestedInputObjectSchema =
  Schema;
