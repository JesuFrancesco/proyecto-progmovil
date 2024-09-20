import { z } from 'zod';
import { ProductQuestionUpdateManyMutationInputObjectSchema } from './objects/ProductQuestionUpdateManyMutationInput.schema';
import { ProductQuestionWhereInputObjectSchema } from './objects/ProductQuestionWhereInput.schema';

export const ProductQuestionUpdateManySchema = z.object({
  data: ProductQuestionUpdateManyMutationInputObjectSchema,
  where: ProductQuestionWhereInputObjectSchema.optional(),
});
