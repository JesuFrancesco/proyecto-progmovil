import { z } from 'zod';
import { UserNotificationWhereInputObjectSchema } from './objects/UserNotificationWhereInput.schema';

export const UserNotificationDeleteManySchema = z.object({
  where: UserNotificationWhereInputObjectSchema.optional(),
});
