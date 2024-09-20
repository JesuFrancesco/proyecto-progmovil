import { z } from 'zod';
import { NotificationOrderByWithRelationInputObjectSchema } from './objects/NotificationOrderByWithRelationInput.schema';
import { NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';
import { NotificationWhereUniqueInputObjectSchema } from './objects/NotificationWhereUniqueInput.schema';
import { NotificationScalarFieldEnumSchema } from './enums/NotificationScalarFieldEnum.schema';

export const NotificationFindFirstSchema = z.object({
  orderBy: z
    .union([
      NotificationOrderByWithRelationInputObjectSchema,
      NotificationOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: NotificationWhereInputObjectSchema.optional(),
  cursor: NotificationWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(NotificationScalarFieldEnumSchema).optional(),
});
