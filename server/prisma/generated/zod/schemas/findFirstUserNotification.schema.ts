import { z } from 'zod';
import { UserNotificationOrderByWithRelationInputObjectSchema } from './objects/UserNotificationOrderByWithRelationInput.schema';
import { UserNotificationWhereInputObjectSchema } from './objects/UserNotificationWhereInput.schema';
import { UserNotificationWhereUniqueInputObjectSchema } from './objects/UserNotificationWhereUniqueInput.schema';
import { UserNotificationScalarFieldEnumSchema } from './enums/UserNotificationScalarFieldEnum.schema';

export const UserNotificationFindFirstSchema = z.object({
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
  distinct: z.array(UserNotificationScalarFieldEnumSchema).optional(),
});
