import { z } from 'zod';
import { ProductQuestionWhereUniqueInputObjectSchema } from './objects/ProductQuestionWhereUniqueInput.schema';

export const ProductQuestionFindUniqueSchema = z.object({
  where: ProductQuestionWhereUniqueInputObjectSchema,
});
