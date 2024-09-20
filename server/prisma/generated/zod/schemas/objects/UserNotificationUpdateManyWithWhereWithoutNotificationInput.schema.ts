import { z } from 'zod';
import { UserNotificationScalarWhereInputObjectSchema } from './UserNotificationScalarWhereInput.schema';
import { UserNotificationUpdateManyMutationInputObjectSchema } from './UserNotificationUpdateManyMutationInput.schema';
import { UserNotificationUncheckedUpdateManyWithoutUserNotificationsInputObjectSchema } from './UserNotificationUncheckedUpdateManyWithoutUserNotificationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationUpdateManyWithWhereWithoutNotificationInput> =
  z
    .object({
      where: z.lazy(() => UserNotificationScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => UserNotificationUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            UserNotificationUncheckedUpdateManyWithoutUserNotificationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserNotificationUpdateManyWithWhereWithoutNotificationInputObjectSchema =
  Schema;
