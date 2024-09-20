import { z } from 'zod';
import { ProductRatingUpdateInputObjectSchema } from './objects/ProductRatingUpdateInput.schema';
import { ProductRatingUncheckedUpdateInputObjectSchema } from './objects/ProductRatingUncheckedUpdateInput.schema';
import { ProductRatingWhereUniqueInputObjectSchema } from './objects/ProductRatingWhereUniqueInput.schema';

export const ProductRatingUpdateOneSchema = z.object({
  data: z.union([
    ProductRatingUpdateInputObjectSchema,
    ProductRatingUncheckedUpdateInputObjectSchema,
  ]),
  where: ProductRatingWhereUniqueInputObjectSchema,
});
