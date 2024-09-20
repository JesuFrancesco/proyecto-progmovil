import { z } from 'zod';
import { ProductTagOrderByWithRelationInputObjectSchema } from './objects/ProductTagOrderByWithRelationInput.schema';
import { ProductTagWhereInputObjectSchema } from './objects/ProductTagWhereInput.schema';
import { ProductTagWhereUniqueInputObjectSchema } from './objects/ProductTagWhereUniqueInput.schema';
import { ProductTagScalarFieldEnumSchema } from './enums/ProductTagScalarFieldEnum.schema';

export const ProductTagFindFirstSchema = z.object({
  orderBy: z
    .union([
      ProductTagOrderByWithRelationInputObjectSchema,
      ProductTagOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProductTagWhereInputObjectSchema.optional(),
  cursor: ProductTagWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ProductTagScalarFieldEnumSchema).optional(),
});
