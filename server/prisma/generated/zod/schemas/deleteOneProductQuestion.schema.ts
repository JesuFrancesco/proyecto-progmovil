import { z } from 'zod';
import { ProductQuestionWhereUniqueInputObjectSchema } from './objects/ProductQuestionWhereUniqueInput.schema';

export const ProductQuestionDeleteOneSchema = z.object({
  where: ProductQuestionWhereUniqueInputObjectSchema,
});
