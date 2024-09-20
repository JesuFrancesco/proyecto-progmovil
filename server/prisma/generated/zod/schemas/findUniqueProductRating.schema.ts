import { z } from 'zod';
import { ProductRatingWhereUniqueInputObjectSchema } from './objects/ProductRatingWhereUniqueInput.schema';

export const ProductRatingFindUniqueSchema = z.object({
  where: ProductRatingWhereUniqueInputObjectSchema,
});
