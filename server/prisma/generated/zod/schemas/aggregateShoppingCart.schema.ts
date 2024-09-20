import { z } from 'zod';
import { ShoppingCartOrderByWithRelationInputObjectSchema } from './objects/ShoppingCartOrderByWithRelationInput.schema';
import { ShoppingCartWhereInputObjectSchema } from './objects/ShoppingCartWhereInput.schema';
import { ShoppingCartWhereUniqueInputObjectSchema } from './objects/ShoppingCartWhereUniqueInput.schema';
import { ShoppingCartCountAggregateInputObjectSchema } from './objects/ShoppingCartCountAggregateInput.schema';
import { ShoppingCartMinAggregateInputObjectSchema } from './objects/ShoppingCartMinAggregateInput.schema';
import { ShoppingCartMaxAggregateInputObjectSchema } from './objects/ShoppingCartMaxAggregateInput.schema';
import { ShoppingCartAvgAggregateInputObjectSchema } from './objects/ShoppingCartAvgAggregateInput.schema';
import { ShoppingCartSumAggregateInputObjectSchema } from './objects/ShoppingCartSumAggregateInput.schema';

export const ShoppingCartAggregateSchema = z.object({
  orderBy: z
    .union([
      ShoppingCartOrderByWithRelationInputObjectSchema,
      ShoppingCartOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ShoppingCartWhereInputObjectSchema.optional(),
  cursor: ShoppingCartWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ShoppingCartCountAggregateInputObjectSchema])
    .optional(),
  _min: ShoppingCartMinAggregateInputObjectSchema.optional(),
  _max: ShoppingCartMaxAggregateInputObjectSchema.optional(),
  _avg: ShoppingCartAvgAggregateInputObjectSchema.optional(),
  _sum: ShoppingCartSumAggregateInputObjectSchema.optional(),
});
