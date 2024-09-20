import { z } from 'zod';
import { ProductTagWhereUniqueInputObjectSchema } from './objects/ProductTagWhereUniqueInput.schema';

export const ProductTagFindUniqueSchema = z.object({
  where: ProductTagWhereUniqueInputObjectSchema,
});
