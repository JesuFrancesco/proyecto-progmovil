import { z } from 'zod';
import { CartItemOrderByWithRelationInputObjectSchema } from './objects/CartItemOrderByWithRelationInput.schema';
import { CartItemWhereInputObjectSchema } from './objects/CartItemWhereInput.schema';
import { CartItemWhereUniqueInputObjectSchema } from './objects/CartItemWhereUniqueInput.schema';
import { CartItemCountAggregateInputObjectSchema } from './objects/CartItemCountAggregateInput.schema';
import { CartItemMinAggregateInputObjectSchema } from './objects/CartItemMinAggregateInput.schema';
import { CartItemMaxAggregateInputObjectSchema } from './objects/CartItemMaxAggregateInput.schema';
import { CartItemAvgAggregateInputObjectSchema } from './objects/CartItemAvgAggregateInput.schema';
import { CartItemSumAggregateInputObjectSchema } from './objects/CartItemSumAggregateInput.schema';

export const CartItemAggregateSchema = z.object({
  orderBy: z
    .union([
      CartItemOrderByWithRelationInputObjectSchema,
      CartItemOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CartItemWhereInputObjectSchema.optional(),
  cursor: CartItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), CartItemCountAggregateInputObjectSchema])
    .optional(),
  _min: CartItemMinAggregateInputObjectSchema.optional(),
  _max: CartItemMaxAggregateInputObjectSchema.optional(),
  _avg: CartItemAvgAggregateInputObjectSchema.optional(),
  _sum: CartItemSumAggregateInputObjectSchema.optional(),
});
