import { z } from 'zod';
import { UserNotificationWhereUniqueInputObjectSchema } from './objects/UserNotificationWhereUniqueInput.schema';

export const UserNotificationFindUniqueSchema = z.object({
  where: UserNotificationWhereUniqueInputObjectSchema,
});
