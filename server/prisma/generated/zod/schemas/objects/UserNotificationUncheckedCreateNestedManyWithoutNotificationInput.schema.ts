import { z } from 'zod';
import { UserNotificationCreateWithoutNotificationInputObjectSchema } from './UserNotificationCreateWithoutNotificationInput.schema';
import { UserNotificationUncheckedCreateWithoutNotificationInputObjectSchema } from './UserNotificationUncheckedCreateWithoutNotificationInput.schema';
import { UserNotificationCreateOrConnectWithoutNotificationInputObjectSchema } from './UserNotificationCreateOrConnectWithoutNotificationInput.schema';
import { UserNotificationWhereUniqueInputObjectSchema } from './UserNotificationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationUncheckedCreateNestedManyWithoutNotificationInput> =
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
      connect: z
        .union([
          z.lazy(() => UserNotificationWhereUniqueInputObjectSchema),
          z.lazy(() => UserNotificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserNotificationUncheckedCreateNestedManyWithoutNotificationInputObjectSchema =
  Schema;
