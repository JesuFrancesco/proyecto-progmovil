import { z } from 'zod';
import { ProductQuestionWhereInputObjectSchema } from './objects/ProductQuestionWhereInput.schema';
import { ProductQuestionOrderByWithAggregationInputObjectSchema } from './objects/ProductQuestionOrderByWithAggregationInput.schema';
import { ProductQuestionScalarWhereWithAggregatesInputObjectSchema } from './objects/ProductQuestionScalarWhereWithAggregatesInput.schema';
import { ProductQuestionScalarFieldEnumSchema } from './enums/ProductQuestionScalarFieldEnum.schema';

export const ProductQuestionGroupBySchema = z.object({
  where: ProductQuestionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ProductQuestionOrderByWithAggregationInputObjectSchema,
      ProductQuestionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ProductQuestionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProductQuestionScalarFieldEnumSchema),
});
