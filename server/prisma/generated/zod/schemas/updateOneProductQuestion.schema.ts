import { z } from 'zod';
import { ProductQuestionUpdateInputObjectSchema } from './objects/ProductQuestionUpdateInput.schema';
import { ProductQuestionUncheckedUpdateInputObjectSchema } from './objects/ProductQuestionUncheckedUpdateInput.schema';
import { ProductQuestionWhereUniqueInputObjectSchema } from './objects/ProductQuestionWhereUniqueInput.schema';

export const ProductQuestionUpdateOneSchema = z.object({
  data: z.union([
    ProductQuestionUpdateInputObjectSchema,
    ProductQuestionUncheckedUpdateInputObjectSchema,
  ]),
  where: ProductQuestionWhereUniqueInputObjectSchema,
});
