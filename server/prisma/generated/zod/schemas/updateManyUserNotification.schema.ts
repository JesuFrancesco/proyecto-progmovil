import { z } from 'zod';
import { UserNotificationUpdateManyMutationInputObjectSchema } from './objects/UserNotificationUpdateManyMutationInput.schema';
import { UserNotificationWhereInputObjectSchema } from './objects/UserNotificationWhereInput.schema';

export const UserNotificationUpdateManySchema = z.object({
  data: UserNotificationUpdateManyMutationInputObjectSchema,
  where: UserNotificationWhereInputObjectSchema.optional(),
});
