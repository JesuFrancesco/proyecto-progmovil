import { z } from 'zod';
import { UserNotificationWhereInputObjectSchema } from './objects/UserNotificationWhereInput.schema';
import { UserNotificationOrderByWithAggregationInputObjectSchema } from './objects/UserNotificationOrderByWithAggregationInput.schema';
import { UserNotificationScalarWhereWithAggregatesInputObjectSchema } from './objects/UserNotificationScalarWhereWithAggregatesInput.schema';
import { UserNotificationScalarFieldEnumSchema } from './enums/UserNotificationScalarFieldEnum.schema';

export const UserNotificationGroupBySchema = z.object({
  where: UserNotificationWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UserNotificationOrderByWithAggregationInputObjectSchema,
      UserNotificationOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: UserNotificationScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UserNotificationScalarFieldEnumSchema),
});
