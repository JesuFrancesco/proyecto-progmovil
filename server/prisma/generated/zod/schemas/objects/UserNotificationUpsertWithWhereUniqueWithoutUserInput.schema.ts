import { z } from 'zod';
import { UserNotificationWhereUniqueInputObjectSchema } from './UserNotificationWhereUniqueInput.schema';
import { UserNotificationUpdateWithoutUserInputObjectSchema } from './UserNotificationUpdateWithoutUserInput.schema';
import { UserNotificationUncheckedUpdateWithoutUserInputObjectSchema } from './UserNotificationUncheckedUpdateWithoutUserInput.schema';
import { UserNotificationCreateWithoutUserInputObjectSchema } from './UserNotificationCreateWithoutUserInput.schema';
import { UserNotificationUncheckedCreateWithoutUserInputObjectSchema } from './UserNotificationUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserNotificationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserNotificationUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => UserNotificationUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => UserNotificationCreateWithoutUserInputObjectSchema),
        z.lazy(
          () => UserNotificationUncheckedCreateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserNotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
