import { z } from 'zod';
import { ProductTagWhereInputObjectSchema } from './objects/ProductTagWhereInput.schema';

export const ProductTagDeleteManySchema = z.object({
  where: ProductTagWhereInputObjectSchema.optional(),
});
