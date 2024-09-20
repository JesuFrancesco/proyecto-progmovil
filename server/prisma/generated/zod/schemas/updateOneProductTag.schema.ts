import { z } from 'zod';
import { ProductTagUpdateInputObjectSchema } from './objects/ProductTagUpdateInput.schema';
import { ProductTagUncheckedUpdateInputObjectSchema } from './objects/ProductTagUncheckedUpdateInput.schema';
import { ProductTagWhereUniqueInputObjectSchema } from './objects/ProductTagWhereUniqueInput.schema';

export const ProductTagUpdateOneSchema = z.object({
  data: z.union([
    ProductTagUpdateInputObjectSchema,
    ProductTagUncheckedUpdateInputObjectSchema,
  ]),
  where: ProductTagWhereUniqueInputObjectSchema,
});
