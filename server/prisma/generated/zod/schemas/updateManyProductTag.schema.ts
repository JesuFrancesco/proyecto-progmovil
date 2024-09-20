import { z } from 'zod';
import { ProductTagUpdateManyMutationInputObjectSchema } from './objects/ProductTagUpdateManyMutationInput.schema';
import { ProductTagWhereInputObjectSchema } from './objects/ProductTagWhereInput.schema';

export const ProductTagUpdateManySchema = z.object({
  data: ProductTagUpdateManyMutationInputObjectSchema,
  where: ProductTagWhereInputObjectSchema.optional(),
});
