import { z } from 'zod';
import { UserNotificationWhereUniqueInputObjectSchema } from './UserNotificationWhereUniqueInput.schema';
import { UserNotificationUpdateWithoutNotificationInputObjectSchema } from './UserNotificationUpdateWithoutNotificationInput.schema';
import { UserNotificationUncheckedUpdateWithoutNotificationInputObjectSchema } from './UserNotificationUncheckedUpdateWithoutNotificationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserNotificationUpdateWithWhereUniqueWithoutNotificationInput> =
  z
    .object({
      where: z.lazy(() => UserNotificationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => UserNotificationUpdateWithoutNotificationInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserNotificationUncheckedUpdateWithoutNotificationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserNotificationUpdateWithWhereUniqueWithoutNotificationInputObjectSchema =
  Schema;
