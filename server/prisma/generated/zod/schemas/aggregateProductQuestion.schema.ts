import { z } from 'zod';
import { ProductQuestionOrderByWithRelationInputObjectSchema } from './objects/ProductQuestionOrderByWithRelationInput.schema';
import { ProductQuestionWhereInputObjectSchema } from './objects/ProductQuestionWhereInput.schema';
import { ProductQuestionWhereUniqueInputObjectSchema } from './objects/ProductQuestionWhereUniqueInput.schema';
import { ProductQuestionCountAggregateInputObjectSchema } from './objects/ProductQuestionCountAggregateInput.schema';
import { ProductQuestionMinAggregateInputObjectSchema } from './objects/ProductQuestionMinAggregateInput.schema';
import { ProductQuestionMaxAggregateInputObjectSchema } from './objects/ProductQuestionMaxAggregateInput.schema';
import { ProductQuestionAvgAggregateInputObjectSchema } from './objects/ProductQuestionAvgAggregateInput.schema';
import { ProductQuestionSumAggregateInputObjectSchema } from './objects/ProductQuestionSumAggregateInput.schema';

export const ProductQuestionAggregateSchema = z.object({
  orderBy: z
    .union([
      ProductQuestionOrderByWithRelationInputObjectSchema,
      ProductQuestionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProductQuestionWhereInputObjectSchema.optional(),
  cursor: ProductQuestionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ProductQuestionCountAggregateInputObjectSchema])
    .optional(),
  _min: ProductQuestionMinAggregateInputObjectSchema.optional(),
  _max: ProductQuestionMaxAggregateInputObjectSchema.optional(),
  _avg: ProductQuestionAvgAggregateInputObjectSchema.optional(),
  _sum: ProductQuestionSumAggregateInputObjectSchema.optional(),
});
