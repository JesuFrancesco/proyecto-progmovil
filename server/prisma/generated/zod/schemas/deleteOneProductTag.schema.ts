import { z } from 'zod';
import { ProductTagWhereUniqueInputObjectSchema } from './objects/ProductTagWhereUniqueInput.schema';

export const ProductTagDeleteOneSchema = z.object({
  where: ProductTagWhereUniqueInputObjectSchema,
});
