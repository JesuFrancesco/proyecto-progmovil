import { z } from 'zod';
import { ProductRatingWhereUniqueInputObjectSchema } from './objects/ProductRatingWhereUniqueInput.schema';
import { ProductRatingCreateInputObjectSchema } from './objects/ProductRatingCreateInput.schema';
import { ProductRatingUncheckedCreateInputObjectSchema } from './objects/ProductRatingUncheckedCreateInput.schema';
import { ProductRatingUpdateInputObjectSchema } from './objects/ProductRatingUpdateInput.schema';
import { ProductRatingUncheckedUpdateInputObjectSchema } from './objects/ProductRatingUncheckedUpdateInput.schema';

export const ProductRatingUpsertSchema = z.object({
  where: ProductRatingWhereUniqueInputObjectSchema,
  create: z.union([
    ProductRatingCreateInputObjectSchema,
    ProductRatingUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProductRatingUpdateInputObjectSchema,
    ProductRatingUncheckedUpdateInputObjectSchema,
  ]),
});
