import { z } from 'zod';
import { ProductRatingWhereUniqueInputObjectSchema } from './objects/ProductRatingWhereUniqueInput.schema';

export const ProductRatingDeleteOneSchema = z.object({
  where: ProductRatingWhereUniqueInputObjectSchema,
});
