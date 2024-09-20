import { z } from 'zod';
import { NotificationCreateInputObjectSchema } from './objects/NotificationCreateInput.schema';
import { NotificationUncheckedCreateInputObjectSchema } from './objects/NotificationUncheckedCreateInput.schema';

export const NotificationCreateOneSchema = z.object({
  data: z.union([
    NotificationCreateInputObjectSchema,
    NotificationUncheckedCreateInputObjectSchema,
  ]),
});
