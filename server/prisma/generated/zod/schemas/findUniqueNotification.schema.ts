import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';

export const NotificationFindUniqueSchema = z.object({
  where: NotificationWhereUniqueInputObjectSchema,
});
