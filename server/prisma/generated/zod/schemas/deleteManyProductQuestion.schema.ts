import { z } from 'zod';
import { ProductQuestionWhereInputObjectSchema } from './objects/ProductQuestionWhereInput.schema';

export const ProductQuestionDeleteManySchema = z.object({
  where: ProductQuestionWhereInputObjectSchema.optional(),
});
