import { z } from 'zod';
import { UserNotificationUpdateInputObjectSchema } from './objects/UserNotificationUpdateInput.schema';
import { UserNotificationUncheckedUpdateInputObjectSchema } from './objects/UserNotificationUncheckedUpdateInput.schema';
import { UserNotificationWhereUniqueInputObjectSchema } from './objects/UserNotificationWhereUniqueInput.schema';

export const UserNotificationUpdateOneSchema = z.object({
  data: z.union([
    UserNotificationUpdateInputObjectSchema,
    UserNotificationUncheckedUpdateInputObjectSchema,
  ]),
  where: UserNotificationWhereUniqueInputObjectSchema,
});
