import { z } from 'zod';
import { UserNotificationCreateWithoutUserInputObjectSchema } from './UserNotificationCreateWithoutUserInput.schema';
import { UserNotificationUncheckedCreateWithoutUserInputObjectSchema } from './UserNotificationUncheckedCreateWithoutUserInput.schema';
import { UserNotificationCreateOrConnectWithoutUserInputObjectSchema } from './UserNotificationCreateOrConnectWithoutUserInput.schema';
import { UserNotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserNotificationUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserNotificationWhereUniqueInputObjectSchema } from './UserNotificationWhereUniqueInput.schema';
import { UserNotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserNotificationUpdateWithWhereUniqueWithoutUserInput.schema';
import { UserNotificationUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserNotificationUpdateManyWithWhereWithoutUserInput.schema';
import { UserNotificationScalarWhereInputObjectSchema } from './UserNotificationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserNotificationCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => UserNotificationCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () => UserNotificationUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => UserNotificationUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => UserNotificationCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => UserNotificationCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              UserNotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserNotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => UserNotificationWhereUniqueInputObjectSchema),
          z.lazy(() => UserNotificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserNotificationWhereUniqueInputObjectSchema),
          z.lazy(() => UserNotificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserNotificationWhereUniqueInputObjectSchema),
          z.lazy(() => UserNotificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserNotificationWhereUniqueInputObjectSchema),
          z.lazy(() => UserNotificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              UserNotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserNotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              UserNotificationUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserNotificationUpdateManyWithWhereWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserNotificationScalarWhereInputObjectSchema),
          z.lazy(() => UserNotificationScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserNotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
