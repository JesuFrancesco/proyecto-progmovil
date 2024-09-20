import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';

export const NotificationDeleteOneSchema = z.object({
  where: NotificationWhereUniqueInputObjectSchema,
});
