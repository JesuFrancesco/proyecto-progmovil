import { z } from 'zod';
import { ProductQuestionOrderByWithRelationInputObjectSchema } from './objects/ProductQuestionOrderByWithRelationInput.schema';
import { ProductQuestionWhereInputObjectSchema } from './objects/ProductQuestionWhereInput.schema';
import { ProductQuestionWhereUniqueInputObjectSchema } from './objects/ProductQuestionWhereUniqueInput.schema';
import { ProductQuestionScalarFieldEnumSchema } from './enums/ProductQuestionScalarFieldEnum.schema';

export const ProductQuestionFindManySchema = z.object({
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
  distinct: z.array(ProductQuestionScalarFieldEnumSchema).optional(),
});
