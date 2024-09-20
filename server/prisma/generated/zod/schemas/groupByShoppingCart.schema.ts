import { z } from 'zod';
import { ShoppingCartWhereInputObjectSchema } from './objects/ShoppingCartWhereInput.schema';
import { ShoppingCartOrderByWithAggregationInputObjectSchema } from './objects/ShoppingCartOrderByWithAggregationInput.schema';
import { ShoppingCartScalarWhereWithAggregatesInputObjectSchema } from './objects/ShoppingCartScalarWhereWithAggregatesInput.schema';
import { ShoppingCartScalarFieldEnumSchema } from './enums/ShoppingCartScalarFieldEnum.schema';

export const ShoppingCartGroupBySchema = z.object({
  where: ShoppingCartWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ShoppingCartOrderByWithAggregationInputObjectSchema,
      ShoppingCartOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ShoppingCartScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ShoppingCartScalarFieldEnumSchema),
});
