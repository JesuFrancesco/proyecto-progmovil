import { z } from 'zod';
import { UserNotificationWhereUniqueInputObjectSchema } from './objects/UserNotificationWhereUniqueInput.schema';

export const UserNotificationDeleteOneSchema = z.object({
  where: UserNotificationWhereUniqueInputObjectSchema,
});
