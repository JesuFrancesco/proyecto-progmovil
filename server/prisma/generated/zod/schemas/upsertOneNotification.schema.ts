import { z } from 'zod';
import { NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';
import { NotificationCreateInputObjectSchema } from './objects/NotificationCreateInput.schema';
import { NotificationUncheckedCreateInputObjectSchema } from './objects/NotificationUncheckedCreateInput.schema';
import { NotificationUpdateInputObjectSchema } from './objects/NotificationUpdateInput.schema';
import { NotificationUncheckedUpdateInputObjectSchema } from './objects/NotificationUncheckedUpdateInput.schema';

export const NotificationUpsertSchema = z.object({
  where: NotificationWhereUniqueInputObjectSchema,
  create: z.union([
    NotificationCreateInputObjectSchema,
    NotificationUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    NotificationUpdateInputObjectSchema,
    NotificationUncheckedUpdateInputObjectSchema,
  ]),
});
