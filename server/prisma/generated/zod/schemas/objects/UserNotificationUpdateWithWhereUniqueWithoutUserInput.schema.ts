import { z } from 'zod';
import { UserNotificationWhereUniqueInputObjectSchema } from './UserNotificationWhereUniqueInput.schema';
import { UserNotificationUpdateWithoutUserInputObjectSchema } from './UserNotificationUpdateWithoutUserInput.schema';
import { UserNotificationUncheckedUpdateWithoutUserInputObjectSchema } from './UserNotificationUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserNotificationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserNotificationUpdateWithoutUserInputObjectSchema),
        z.lazy(
          () => UserNotificationUncheckedUpdateWithoutUserInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserNotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
