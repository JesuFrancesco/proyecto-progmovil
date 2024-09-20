import { z } from 'zod';
import { NotificationUpdateInputObjectSchema } from './objects/NotificationUpdateInput.schema';
import { NotificationUncheckedUpdateInputObjectSchema } from './objects/NotificationUncheckedUpdateInput.schema';
import { NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';

export const NotificationUpdateOneSchema = z.object({
  data: z.union([
    NotificationUpdateInputObjectSchema,
    NotificationUncheckedUpdateInputObjectSchema,
  ]),
  where: NotificationWhereUniqueInputObjectSchema,
});
