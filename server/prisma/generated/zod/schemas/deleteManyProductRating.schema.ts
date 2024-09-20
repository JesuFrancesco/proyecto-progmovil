import { z } from 'zod';
import { ProductRatingWhereInputObjectSchema } from './objects/ProductRatingWhereInput.schema';

export const ProductRatingDeleteManySchema = z.object({
  where: ProductRatingWhereInputObjectSchema.optional(),
});
