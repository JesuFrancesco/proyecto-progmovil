import { z } from 'zod';
import { ProductRatingCreateInputObjectSchema } from './objects/ProductRatingCreateInput.schema';
import { ProductRatingUncheckedCreateInputObjectSchema } from './objects/ProductRatingUncheckedCreateInput.schema';

export const ProductRatingCreateOneSchema = z.object({
  data: z.union([
    ProductRatingCreateInputObjectSchema,
    ProductRatingUncheckedCreateInputObjectSchema,
  ]),
});
