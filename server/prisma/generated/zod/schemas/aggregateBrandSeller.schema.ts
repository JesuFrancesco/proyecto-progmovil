import { z } from 'zod';
import { BrandSellerOrderByWithRelationInputObjectSchema } from './objects/BrandSellerOrderByWithRelationInput.schema';
import { BrandSellerWhereInputObjectSchema } from './objects/BrandSellerWhereInput.schema';
import { BrandSellerWhereUniqueInputObjectSchema } from './objects/BrandSellerWhereUniqueInput.schema';
import { BrandSellerCountAggregateInputObjectSchema } from './objects/BrandSellerCountAggregateInput.schema';
import { BrandSellerMinAggregateInputObjectSchema } from './objects/BrandSellerMinAggregateInput.schema';
import { BrandSellerMaxAggregateInputObjectSchema } from './objects/BrandSellerMaxAggregateInput.schema';
import { BrandSellerAvgAggregateInputObjectSchema } from './objects/BrandSellerAvgAggregateInput.schema';
import { BrandSellerSumAggregateInputObjectSchema } from './objects/BrandSellerSumAggregateInput.schema';

export const BrandSellerAggregateSchema = z.object({
  orderBy: z
    .union([
      BrandSellerOrderByWithRelationInputObjectSchema,
      BrandSellerOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BrandSellerWhereInputObjectSchema.optional(),
  cursor: BrandSellerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), BrandSellerCountAggregateInputObjectSchema])
    .optional(),
  _min: BrandSellerMinAggregateInputObjectSchema.optional(),
  _max: BrandSellerMaxAggregateInputObjectSchema.optional(),
  _avg: BrandSellerAvgAggregateInputObjectSchema.optional(),
  _sum: BrandSellerSumAggregateInputObjectSchema.optional(),
});
