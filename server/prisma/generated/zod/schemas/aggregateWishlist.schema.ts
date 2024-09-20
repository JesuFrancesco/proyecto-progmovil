import { z } from 'zod';
import { WishlistOrderByWithRelationInputObjectSchema } from './objects/WishlistOrderByWithRelationInput.schema';
import { WishlistWhereInputObjectSchema } from './objects/WishlistWhereInput.schema';
import { WishlistWhereUniqueInputObjectSchema } from './objects/WishlistWhereUniqueInput.schema';
import { WishlistCountAggregateInputObjectSchema } from './objects/WishlistCountAggregateInput.schema';
import { WishlistMinAggregateInputObjectSchema } from './objects/WishlistMinAggregateInput.schema';
import { WishlistMaxAggregateInputObjectSchema } from './objects/WishlistMaxAggregateInput.schema';
import { WishlistAvgAggregateInputObjectSchema } from './objects/WishlistAvgAggregateInput.schema';
import { WishlistSumAggregateInputObjectSchema } from './objects/WishlistSumAggregateInput.schema';

export const WishlistAggregateSchema = z.object({
  orderBy: z
    .union([
      WishlistOrderByWithRelationInputObjectSchema,
      WishlistOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: WishlistWhereInputObjectSchema.optional(),
  cursor: WishlistWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), WishlistCountAggregateInputObjectSchema])
    .optional(),
  _min: WishlistMinAggregateInputObjectSchema.optional(),
  _max: WishlistMaxAggregateInputObjectSchema.optional(),
  _avg: WishlistAvgAggregateInputObjectSchema.optional(),
  _sum: WishlistSumAggregateInputObjectSchema.optional(),
});
