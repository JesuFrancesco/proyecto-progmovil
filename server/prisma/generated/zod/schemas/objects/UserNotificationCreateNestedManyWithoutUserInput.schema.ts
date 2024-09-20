import { z } from 'zod';
import { UserNotificationCreateWithoutUserInputObjectSchema } from './UserNotificationCreateWithoutUserInput.schema';
import { UserNotificationUncheckedCreateWithoutUserInputObjectSchema } from './UserNotificationUncheckedCreateWithoutUserInput.schema';
import { UserNotificationCreateOrConnectWithoutUserInputObjectSchema } from './UserNotificationCreateOrConnectWithoutUserInput.schema';
import { UserNotificationWhereUniqueInputObjectSchema } from './UserNotificationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationCreateNestedManyWithoutUserInput> =
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
      connect: z
        .union([
          z.lazy(() => UserNotificationWhereUniqueInputObjectSchema),
          z.lazy(() => UserNotificationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserNotificationCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
