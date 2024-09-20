import { z } from 'zod';
import { UserNotificationWhereUniqueInputObjectSchema } from './UserNotificationWhereUniqueInput.schema';
import { UserNotificationCreateWithoutUserInputObjectSchema } from './UserNotificationCreateWithoutUserInput.schema';
import { UserNotificationUncheckedCreateWithoutUserInputObjectSchema } from './UserNotificationUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserNotificationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserNotificationCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => UserNotificationUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserNotificationCreateOrConnectWithoutUserInputObjectSchema =
  Schema;
