import { z } from 'zod';
import { OrderItemOrderByWithRelationInputObjectSchema } from './objects/OrderItemOrderByWithRelationInput.schema';
import { OrderItemWhereInputObjectSchema } from './objects/OrderItemWhereInput.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';
import { OrderItemCountAggregateInputObjectSchema } from './objects/OrderItemCountAggregateInput.schema';
import { OrderItemMinAggregateInputObjectSchema } from './objects/OrderItemMinAggregateInput.schema';
import { OrderItemMaxAggregateInputObjectSchema } from './objects/OrderItemMaxAggregateInput.schema';
import { OrderItemAvgAggregateInputObjectSchema } from './objects/OrderItemAvgAggregateInput.schema';
import { OrderItemSumAggregateInputObjectSchema } from './objects/OrderItemSumAggregateInput.schema';

export const OrderItemAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), OrderItemCountAggregateInputObjectSchema])
    .optional(),
  _min: OrderItemMinAggregateInputObjectSchema.optional(),
  _max: OrderItemMaxAggregateInputObjectSchema.optional(),
  _avg: OrderItemAvgAggregateInputObjectSchema.optional(),
  _sum: OrderItemSumAggregateInputObjectSchema.optional(),
});
