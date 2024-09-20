import { z } from 'zod';
import { UserNotificationOrderByWithRelationInputObjectSchema } from './objects/UserNotificationOrderByWithRelationInput.schema';
import { UserNotificationWhereInputObjectSchema } from './objects/UserNotificationWhereInput.schema';
import { UserNotificationWhereUniqueInputObjectSchema } from './objects/UserNotificationWhereUniqueInput.schema';
import { UserNotificationCountAggregateInputObjectSchema } from './objects/UserNotificationCountAggregateInput.schema';
import { UserNotificationMinAggregateInputObjectSchema } from './objects/UserNotificationMinAggregateInput.schema';
import { UserNotificationMaxAggregateInputObjectSchema } from './objects/UserNotificationMaxAggregateInput.schema';
import { UserNotificationAvgAggregateInputObjectSchema } from './objects/UserNotificationAvgAggregateInput.schema';
import { UserNotificationSumAggregateInputObjectSchema } from './objects/UserNotificationSumAggregateInput.schema';

export const UserNotificationAggregateSchema = z.object({
  orderBy: z
    .union([
      UserNotificationOrderByWithRelationInputObjectSchema,
      UserNotificationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UserNotificationWhereInputObjectSchema.optional(),
  cursor: UserNotificationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), UserNotificationCountAggregateInputObjectSchema])
    .optional(),
  _min: UserNotificationMinAggregateInputObjectSchema.optional(),
  _max: UserNotificationMaxAggregateInputObjectSchema.optional(),
  _avg: UserNotificationAvgAggregateInputObjectSchema.optional(),
  _sum: UserNotificationSumAggregateInputObjectSchema.optional(),
});
