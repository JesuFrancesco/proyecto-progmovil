import { z } from 'zod';
import { ProductTagCreateInputObjectSchema } from './objects/ProductTagCreateInput.schema';
import { ProductTagUncheckedCreateInputObjectSchema } from './objects/ProductTagUncheckedCreateInput.schema';

export const ProductTagCreateOneSchema = z.object({
  data: z.union([
    ProductTagCreateInputObjectSchema,
    ProductTagUncheckedCreateInputObjectSchema,
  ]),
});
