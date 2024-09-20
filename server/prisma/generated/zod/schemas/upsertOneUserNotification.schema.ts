import { z } from 'zod';
import { UserNotificationWhereUniqueInputObjectSchema } from './objects/UserNotificationWhereUniqueInput.schema';
import { UserNotificationCreateInputObjectSchema } from './objects/UserNotificationCreateInput.schema';
import { UserNotificationUncheckedCreateInputObjectSchema } from './objects/UserNotificationUncheckedCreateInput.schema';
import { UserNotificationUpdateInputObjectSchema } from './objects/UserNotificationUpdateInput.schema';
import { UserNotificationUncheckedUpdateInputObjectSchema } from './objects/UserNotificationUncheckedUpdateInput.schema';

export const UserNotificationUpsertSchema = z.object({
  where: UserNotificationWhereUniqueInputObjectSchema,
  create: z.union([
    UserNotificationCreateInputObjectSchema,
    UserNotificationUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    UserNotificationUpdateInputObjectSchema,
    UserNotificationUncheckedUpdateInputObjectSchema,
  ]),
});
