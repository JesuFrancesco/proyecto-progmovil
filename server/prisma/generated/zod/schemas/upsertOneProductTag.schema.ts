import { z } from 'zod';
import { ProductTagWhereUniqueInputObjectSchema } from './objects/ProductTagWhereUniqueInput.schema';
import { ProductTagCreateInputObjectSchema } from './objects/ProductTagCreateInput.schema';
import { ProductTagUncheckedCreateInputObjectSchema } from './objects/ProductTagUncheckedCreateInput.schema';
import { ProductTagUpdateInputObjectSchema } from './objects/ProductTagUpdateInput.schema';
import { ProductTagUncheckedUpdateInputObjectSchema } from './objects/ProductTagUncheckedUpdateInput.schema';

export const ProductTagUpsertSchema = z.object({
  where: ProductTagWhereUniqueInputObjectSchema,
  create: z.union([
    ProductTagCreateInputObjectSchema,
    ProductTagUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProductTagUpdateInputObjectSchema,
    ProductTagUncheckedUpdateInputObjectSchema,
  ]),
});
