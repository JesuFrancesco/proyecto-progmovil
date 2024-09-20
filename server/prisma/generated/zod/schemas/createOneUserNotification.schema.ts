import { z } from 'zod';
import { UserNotificationCreateInputObjectSchema } from './objects/UserNotificationCreateInput.schema';
import { UserNotificationUncheckedCreateInputObjectSchema } from './objects/UserNotificationUncheckedCreateInput.schema';

export const UserNotificationCreateOneSchema = z.object({
  data: z.union([
    UserNotificationCreateInputObjectSchema,
    UserNotificationUncheckedCreateInputObjectSchema,
  ]),
});
