import { z } from 'zod';
import { ProductQuestionWhereUniqueInputObjectSchema } from './objects/ProductQuestionWhereUniqueInput.schema';
import { ProductQuestionCreateInputObjectSchema } from './objects/ProductQuestionCreateInput.schema';
import { ProductQuestionUncheckedCreateInputObjectSchema } from './objects/ProductQuestionUncheckedCreateInput.schema';
import { ProductQuestionUpdateInputObjectSchema } from './objects/ProductQuestionUpdateInput.schema';
import { ProductQuestionUncheckedUpdateInputObjectSchema } from './objects/ProductQuestionUncheckedUpdateInput.schema';

export const ProductQuestionUpsertSchema = z.object({
  where: ProductQuestionWhereUniqueInputObjectSchema,
  create: z.union([
    ProductQuestionCreateInputObjectSchema,
    ProductQuestionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProductQuestionUpdateInputObjectSchema,
    ProductQuestionUncheckedUpdateInputObjectSchema,
  ]),
});
