import { z } from 'zod';
import { WishlistWhereInputObjectSchema } from './objects/WishlistWhereInput.schema';
import { WishlistOrderByWithAggregationInputObjectSchema } from './objects/WishlistOrderByWithAggregationInput.schema';
import { WishlistScalarWhereWithAggregatesInputObjectSchema } from './objects/WishlistScalarWhereWithAggregatesInput.schema';
import { WishlistScalarFieldEnumSchema } from './enums/WishlistScalarFieldEnum.schema';

export const WishlistGroupBySchema = z.object({
  where: WishlistWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      WishlistOrderByWithAggregationInputObjectSchema,
      WishlistOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: WishlistScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(WishlistScalarFieldEnumSchema),
});
