import { z } from 'zod';
import { UserCreateWithoutProvinciaInputObjectSchema } from './UserCreateWithoutProvinciaInput.schema';
import { UserUncheckedCreateWithoutProvinciaInputObjectSchema } from './UserUncheckedCreateWithoutProvinciaInput.schema';
import { UserCreateOrConnectWithoutProvinciaInputObjectSchema } from './UserCreateOrConnectWithoutProvinciaInput.schema';
import { UserUpsertWithWhereUniqueWithoutProvinciaInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutProvinciaInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutProvinciaInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutProvinciaInput.schema';
import { UserUpdateManyWithWhereWithoutProvinciaInputObjectSchema } from './UserUpdateManyWithWhereWithoutProvinciaInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutProvinciaNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => UserUpsertWithWhereUniqueWithoutProvinciaInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUpsertWithWhereUniqueWithoutProvinciaInputObjectSchema,
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
            () => UserUpdateWithWhereUniqueWithoutProvinciaInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUpdateWithWhereUniqueWithoutProvinciaInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => UserUpdateManyWithWhereWithoutProvinciaInputObjectSchema,
          ),
          z
            .lazy(
              () => UserUpdateManyWithWhereWithoutProvinciaInputObjectSchema,
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

export const UserUncheckedUpdateManyWithoutProvinciaNestedInputObjectSchema =
  Schema;
