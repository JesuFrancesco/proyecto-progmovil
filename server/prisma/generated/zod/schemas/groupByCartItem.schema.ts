import { z } from 'zod';
import { CartItemWhereInputObjectSchema } from './objects/CartItemWhereInput.schema';
import { CartItemOrderByWithAggregationInputObjectSchema } from './objects/CartItemOrderByWithAggregationInput.schema';
import { CartItemScalarWhereWithAggregatesInputObjectSchema } from './objects/CartItemScalarWhereWithAggregatesInput.schema';
import { CartItemScalarFieldEnumSchema } from './enums/CartItemScalarFieldEnum.schema';

export const CartItemGroupBySchema = z.object({
  where: CartItemWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CartItemOrderByWithAggregationInputObjectSchema,
      CartItemOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: CartItemScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CartItemScalarFieldEnumSchema),
});
