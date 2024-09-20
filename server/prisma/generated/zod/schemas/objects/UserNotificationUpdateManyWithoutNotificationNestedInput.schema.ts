import { z } from 'zod';
import { UserNotificationCreateWithoutNotificationInputObjectSchema } from './UserNotificationCreateWithoutNotificationInput.schema';
import { UserNotificationUncheckedCreateWithoutNotificationInputObjectSchema } from './UserNotificationUncheckedCreateWithoutNotificationInput.schema';
import { UserNotificationCreateOrConnectWithoutNotificationInputObjectSchema } from './UserNotificationCreateOrConnectWithoutNotificationInput.schema';
import { UserNotificationUpsertWithWhereUniqueWithoutNotificationInputObjectSchema } from './UserNotificationUpsertWithWhereUniqueWithoutNotificationInput.schema';
import { UserNotificationWhereUniqueInputObjectSchema } from './UserNotificationWhereUniqueInput.schema';
import { UserNotificationUpdateWithWhereUniqueWithoutNotificationInputObjectSchema } from './UserNotificationUpdateWithWhereUniqueWithoutNotificationInput.schema';
import { UserNotificationUpdateManyWithWhereWithoutNotificationInputObjectSchema } from './UserNotificationUpdateManyWithWhereWithoutNotificationInput.schema';
import { UserNotificationScalarWhereInputObjectSchema } from './UserNotificationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationUpdateManyWithoutNotificationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => UserNotificationCreateWithoutNotificationInputObjectSchema,
          ),
          z
            .lazy(
              () => UserNotificationCreateWithoutNotificationInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              UserNotificationUncheckedCreateWithoutNotificationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserNotificationUncheckedCreateWithoutNotificationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              UserNotificationCreateOrConnectWithoutNotificationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserNotificationCreateOrConnectWithoutNotificationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              UserNotificationUpsertWithWhereUniqueWithoutNotificationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserNotificationUpsertWithWhereUniqueWithoutNotificationInputObjectSchema,
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
              UserNotificationUpdateWithWhereUniqueWithoutNotificationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserNotificationUpdateWithWhereUniqueWithoutNotificationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              UserNotificationUpdateManyWithWhereWithoutNotificationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserNotificationUpdateManyWithWhereWithoutNotificationInputObjectSchema,
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

export const UserNotificationUpdateManyWithoutNotificationNestedInputObjectSchema =
  Schema;
