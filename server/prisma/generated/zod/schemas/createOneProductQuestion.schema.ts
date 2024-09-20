import { z } from 'zod';
import { ProductQuestionCreateInputObjectSchema } from './objects/ProductQuestionCreateInput.schema';
import { ProductQuestionUncheckedCreateInputObjectSchema } from './objects/ProductQuestionUncheckedCreateInput.schema';

export const ProductQuestionCreateOneSchema = z.object({
  data: z.union([
    ProductQuestionCreateInputObjectSchema,
    ProductQuestionUncheckedCreateInputObjectSchema,
  ]),
});
