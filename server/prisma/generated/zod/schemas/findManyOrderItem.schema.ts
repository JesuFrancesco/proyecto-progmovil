import { z } from 'zod';
import { OrderItemOrderByWithRelationInputObjectSchema } from './objects/OrderItemOrderByWithRelationInput.schema';
import { OrderItemWhereInputObjectSchema } from './objects/OrderItemWhereInput.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';
import { OrderItemScalarFieldEnumSchema } from './enums/OrderItemScalarFieldEnum.schema';

export const OrderItemFindManySchema = z.object({
  orderBy: z
    .union([
      OrderItemOrderByWithRelationInputObjectSchema,
      OrderItemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: OrderItemWhereInputObjectSchema.optional(),
  cursor: OrderItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(OrderItemScalarFieldEnumSchema).optional(),
});
