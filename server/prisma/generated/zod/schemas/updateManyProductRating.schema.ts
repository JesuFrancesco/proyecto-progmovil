import { z } from 'zod';
import { ProductRatingUpdateManyMutationInputObjectSchema } from './objects/ProductRatingUpdateManyMutationInput.schema';
import { ProductRatingWhereInputObjectSchema } from './objects/ProductRatingWhereInput.schema';

export const ProductRatingUpdateManySchema = z.object({
  data: ProductRatingUpdateManyMutationInputObjectSchema,
  where: ProductRatingWhereInputObjectSchema.optional(),
});
