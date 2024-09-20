import { z } from 'zod';
import { ProductRatingOrderByWithRelationInputObjectSchema } from './objects/ProductRatingOrderByWithRelationInput.schema';
import { ProductRatingWhereInputObjectSchema } from './objects/ProductRatingWhereInput.schema';
import { ProductRatingWhereUniqueInputObjectSchema } from './objects/ProductRatingWhereUniqueInput.schema';
import { ProductRatingScalarFieldEnumSchema } from './enums/ProductRatingScalarFieldEnum.schema';

export const ProductRatingFindFirstSchema = z.object({
  orderBy: z
    .union([
      ProductRatingOrderByWithRelationInputObjectSchema,
      ProductRatingOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProductRatingWhereInputObjectSchema.optional(),
  cursor: ProductRatingWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ProductRatingScalarFieldEnumSchema).optional(),
});
